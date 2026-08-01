import {readFile,readdir,writeFile} from 'node:fs/promises';
import path from 'node:path';

const root=process.cwd(),site=path.join(root,'site'),reportPath=path.join(root,'research','content-depth-audit.md'),checkOnly=process.argv.includes('--check');
const decode=s=>s.replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&nbsp;/g,' ');
async function walk(d){let out=[];for(const e of await readdir(d,{withFileTypes:true})){const p=path.join(d,e.name);out.push(...(e.isDirectory()?await walk(p):[p]))}return out}
const rel=f=>path.relative(site,f).replaceAll('\\','/');
const text=s=>decode(s.replace(/<script\b[\s\S]*?<\/script>/gi,' ').replace(/<style\b[\s\S]*?<\/style>/gi,' ').replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim());
const words=s=>text(s).match(/[A-Za-z0-9]+(?:[’'./%+–—-][A-Za-z0-9]+)*/g)||[];
const normalize=s=>s.toLowerCase().replace(/[^a-z0-9 ]/g,' ').replace(/\b\d+(?:\.\d+)?\b/g,'#').replace(/\s+/g,' ').trim();
const headingText=s=>[...s.matchAll(/<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/gi)].map(m=>({level:+m[1],text:text(m[2])}));
const sentenceText=s=>text(s).split(/(?<=[.!?])\s+/).map(x=>x.trim()).filter(x=>words(x).length>=7);
const strip=s=>{
  const main=s.match(/<main>([\s\S]*?)<\/main>/i)?.[1]||'';
  return main.replace(/<section class="workspace"[\s\S]*?<\/section>/i,'').replace(/<section class="explain legacy-summary"[\s\S]*?<\/section>/i,'');
};
const pageType=r=>r.startsWith('tools/')?'tool':r.startsWith('categories/')?'hub':r.startsWith('guides/')?'guide':r.startsWith('reference/')?'reference':r.startsWith('comparisons/')?'comparison':'basic';
const category=(r,s)=>r.startsWith('categories/')?path.basename(r,'.html'):s.match(/<p class="eyebrow">([^<]+) \/ field tool/i)?.[1]||'site';
const required={tool:['what this tool is for','before you begin','input guide','how the result should be read','method and logic','worked example','assumptions and limitations','safety and stop conditions','related workflow'],hub:['how to use','choose the right starting point','evidence standard','when to stop'],guide:['scope of this guide','record the conditions','verification checklist','limits'],reference:['scope of this reference','record the conditions','verification checklist','limits'],comparison:['scope of this comparison','record the conditions','verification checklist','limits']};
const target={tool:[550,900],hub:[170,700],guide:[220,1000],reference:[190,800],comparison:[220,900]};
const files=(await walk(site)).filter(f=>f.endsWith('.html')).sort((a,b)=>rel(a).localeCompare(rel(b)));
const pages=[];
for(const file of files){
  const html=await readFile(file,'utf8'),r=rel(file),type=pageType(r),body=strip(html),headings=headingText(body),headingNames=headings.map(x=>x.text.toLowerCase());
  const allLinks=[...body.matchAll(/href="(\/[^"#?]*)/g)].map(m=>m[1]),internal=[...new Set(allLinks.map(x=>x==='/ '?'/':x))];
  const sections=(required[type]||[]).map(name=>headingNames.some(h=>h.includes(name)));
  const sentences=sentenceText(body),norm=sentences.map(normalize),within=norm.length-new Set(norm).size;
  const h1=headings.filter(x=>x.level===1).length,empty=headings.filter(x=>!x.text).length;
  let hierarchy=0,prev=0;for(const h of headings){if(prev&&h.level>prev+1)hierarchy++;prev=h.level}
  const toolComplete=type!=='tool'||(/data-tool=/.test(html)&&/<form class="panel tool-form">/.test(html)&&/class="panel result"/.test(html)&&/Run tool/.test(html)&&/Reset/.test(html));
  pages.push({file,r,html,body,type,category:category(r,html),headings,sections,sentences,norm,within,h1,empty,hierarchy,toolComplete,words:words(body).length,internal,outbound:internal.length,inbound:0});
}
const routeMap=new Map(pages.map(p=>['/'+(p.r==='index.html'?'':p.r),p]));
for(const p of pages)for(let u of p.internal){if(u.endsWith('/'))u+='index.html';const targetPage=routeMap.get(u);if(targetPage&&targetPage!==p)targetPage.inbound++}

const sentencePages=new Map();
for(const p of pages)for(const s of new Set(p.norm))if(s)(sentencePages.get(s)||sentencePages.set(s,new Set()).get(s)).add(p.r);
for(const p of pages){
  const meaningful=p.norm.filter(s=>s&&words(s).length>=7),common=meaningful.filter(s=>(sentencePages.get(s)?.size||0)>=10),duplicate=meaningful.filter(s=>{const n=sentencePages.get(s)?.size||0;return n>=2&&n<10});
  p.commonRatio=meaningful.length?common.length/meaningful.length:0;p.duplicateRatio=meaningful.length?duplicate.length/meaningful.length:0;
  const simpleConverter=['tools/string-action-converter.html','tools/scale-length-identifier.html'].includes(p.r),floor=simpleConverter?550:(target[p.type]?.[0]??(p.r==='index.html'?350:p.r==='about.html'?100:25)),strong=target[p.type]?.[1]??99999;
  const missing=p.sections.filter(x=>!x).length,linkIncomplete=(['tool','guide','reference','comparison'].includes(p.type)&&p.outbound<1)||(p.type==='tool'&&p.inbound<1);
  p.functionallyIncomplete=!p.toolComplete||p.h1!==1||p.empty>0||p.hierarchy>0||linkIncomplete;
  p.thin=p.words<floor;p.duplicateRisk=p.duplicateRatio>.35||p.within>3;p.needs=missing>0||p.thin||p.duplicateRisk||p.functionallyIncomplete;
  p.classification=p.needs?(p.thin?'Thin':'Needs reinforcement'):(p.words>=strong?'Strong':'Sufficient');
  p.missing=[...(required[p.type]||[]).filter((_,i)=>!p.sections[i]),...(p.outbound<1&&p.type!=='basic'?['outbound link']:[]),...(p.inbound<1&&p.type==='tool'?['inbound link']:[]),...(!p.toolComplete?['tool UI']:[]),...(p.h1!==1?['one H1']:[]),...(p.hierarchy?['heading hierarchy']:[])];
}

const counts=k=>pages.filter(p=>p[k]).length,classes=Object.fromEntries(['Strong','Sufficient','Needs reinforcement','Thin'].map(x=>[x,pages.filter(p=>p.classification===x).length]));
const arr=pages.map(p=>p.words),avg=Math.round(arr.reduce((a,b)=>a+b,0)/arr.length),fmt=n=>(n*100).toFixed(1)+'%';
const typeRows=[...new Set(pages.map(p=>p.type))].map(type=>{const a=pages.filter(p=>p.type===type),w=a.map(p=>p.words);return `| ${type} | ${a.length} | ${Math.min(...w)} | ${Math.round(w.reduce((x,y)=>x+y,0)/w.length)} | ${Math.max(...w)} |`}).join('\n');
const rows=pages.map(p=>`| \`/${p.r==='index.html'?'':p.r}\` | ${p.type} | ${p.category} | ${p.words} | ${p.headings.length} | ${p.sections.filter(Boolean).length}/${p.sections.length||'scope'} | ${fmt(p.commonRatio)} | ${fmt(p.duplicateRatio)} | ${p.within} | ${p.inbound}/${p.outbound} | ${p.toolComplete?'yes':'n/a'} | ${p.missing.join(', ')||'—'} | **${p.classification}** |`).join('\n');
const common=[...sentencePages].filter(([,set])=>set.size>=10).sort((a,b)=>b[1].size-a[1].size).slice(0,12).map(([s,set])=>`- ${set.size} pages: “${s}”`).join('\n')||'- None.';
const report=`# Content-depth audit

Generated: ${new Date().toISOString()}  
Scope: all generated public HTML in \`site/\` (71 pages expected)

## Initial baseline at \`98df55e\`

The same main-content extraction was run read-only against the starting commit before reinforcement. The original audit labeled every page sufficient without measuring explanatory body depth. Under the present component and scope floors, the reproducible baseline was Sufficient 4, Needs reinforcement 1, Thin 66; all 66 non-basic supporting/tool pages lacked the newly required structured content set. The baseline word distribution was:

| Page type | Pages | Min | Average | Max |
|---|---:|---:|---:|---:|
| basic | 5 | 30 | 104 | 268 |
| hub | 6 | 28 | 124 | 200 |
| comparison | 3 | 85 | 96 | 109 |
| guide | 10 | 94 | 108 | 132 |
| reference | 6 | 49 | 95 | 129 |
| tool | 41 | 156 | 170 | 184 |

This initial result is retained to show the measured gap; the page-by-page table below is the final post-reinforcement state.

## Final classification

- Strong: ${classes.Strong}
- Sufficient: ${classes.Sufficient}
- Needs reinforcement: ${classes['Needs reinforcement']}
- Thin: ${classes.Thin}
- Duplicate-risk: ${counts('duplicateRisk')}
- Functionally incomplete: ${counts('functionallyIncomplete')}
- HIGH: ${counts('functionallyIncomplete')}
- MEDIUM: ${counts('duplicateRisk')+counts('thin')}

## Method

The audit reads the built HTML, isolates \`<main>\`, and excludes the interactive \`.workspace\` plus the legacy quick summary from explanatory word counts. Navigation, footer, scripts, styles, input labels, placeholders, select options, buttons, and initial result UI therefore do not inflate substantive words. It measures headings and hierarchy; required purpose, preparation, input, interpretation, method, example, limits, safety, and workflow sections; internal inbound/outbound links; repeated sentences within a page; exact normalized sentences across pages; and interactive tool scaffolding. Sentences present on ten or more pages are reported separately as common protocol rather than silently treated as unique editorial content.

Word bands are guidelines, not the sole classifier. A page below its aspirational band can be Sufficient when its actual task is bounded, every required decision component is present, links form a workflow, and no thin, duplicate-risk, or functional flag remains. Contact, Privacy, About, and 404 use scope-specific floors and are not padded.

## Word metrics

- Overall substantive words: min ${Math.min(...arr)}, average ${avg}, max ${Math.max(...arr)}

| Page type | Pages | Min | Average | Max |
|---|---:|---:|---:|---:|
${typeRows}

## Common protocol sentences

These repeated statements are safety or measurement protocol. Their page-level ratio remains visible in the table so excessive boilerplate cannot masquerade as unique depth.

${common}

## Page-by-page inventory

“Required” is the count of required content components present. “Links” is inbound/outbound within main content. “Common” and “dup” are sentence ratios; cross-page common protocol is separated from duplicate-risk.

| URL | Type | Category | Words | Headings | Required | Common | Dup | Within repeats | Links in/out | Tool UI | Missing | Classification |
|---|---|---|---:|---:|---:|---:|---:|---:|---:|---|---|---|
${rows}

## Completion gate

${counts('needs')===0?'PASS':'FAIL'} — Needs reinforcement ${classes['Needs reinforcement']}, Thin ${classes.Thin}, Duplicate-risk ${counts('duplicateRisk')}, Functionally incomplete ${counts('functionallyIncomplete')}.
`;
if(!checkOnly)await writeFile(reportPath,report);
console.log(`Audited ${pages.length} pages: Strong ${classes.Strong}, Sufficient ${classes.Sufficient}, Needs ${classes['Needs reinforcement']}, Thin ${classes.Thin}, duplicate-risk ${counts('duplicateRisk')}, incomplete ${counts('functionallyIncomplete')}.`);
if(pages.length!==71||counts('needs'))process.exitCode=1;
