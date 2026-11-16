import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
import {planBuzzInvestigation} from './assets/buzz.js';
let count=0;
const test=(value,expected=true)=>{assert.deepEqual(value,expected);count++};
const base={instrument:'Electric guitar',construction:'Solid-body',buzzWhere:'Frets 5–12',stringArea:'One string',amplified:'Yes',relief:'0.10',action:'1.50',recentChange:'None',fretCondition:'No visible issue',climate:'Stable'};
const plan=(change={})=>planBuzzInvestigation({...base,...change});
const text=p=>p.checks.join('\n');
const result=plan();
test(result.facts.length,10);
test(result.facts.find(([k])=>k==='Recorded relief')[1],'0.10 mm');
test(result.facts.find(([k])=>k==='Recorded action')[1],'1.50 mm');
test(result.checks[0].startsWith('One-string priority'));
for(const [key,value] of Object.entries({instrument:'Bass',construction:'Semi-hollow',buzzWhere:'Frets 1–4',stringArea:'Most strings',amplified:'No',relief:'0.40',action:'3.00',recentChange:'String gauge',fretCondition:'Unknown',climate:'Recent dry conditions'})){
  const changed=plan({[key]:value});test(JSON.stringify(changed)!==JSON.stringify(result));test(text(changed)!==text(result));
}
for(const buzzWhere of ['Open string','Frets 1–4','Frets 5–12','Above fret 12','Across neck'])test(text(plan({buzzWhere})).length>0);
for(const stringArea of ['One string','Bass side','Treble side','Most strings'])test(plan({stringArea}).checks[0]!==plan({stringArea:''}).checks[0]);
test(text(plan({instrument:'Acoustic guitar',construction:'Acoustic',amplified:'Not applicable'})).includes('an amplifier test is not required'));
test(text(plan({construction:'Semi-hollow'})).includes('Semi-hollow context'));
test(text(plan({climate:'Recent humid conditions'})).includes('recent humid conditions'));
test(text(plan({climate:'Large change'})).includes('large change'));
const unknown=plan({relief:'',action:''});test(unknown.confidence,'measurements incomplete');test(text(unknown).includes('blank is not zero'));test(unknown.facts.find(([k])=>k==='Recorded relief')[1],'Not recorded (mm)');
test(plan({relief:'0',action:'0'}).facts.find(([k])=>k==='Recorded relief')[1],'0 mm');
for(const key of ['relief','action'])for(const value of ['-0.1','NaN','Infinity','bad','1e309']){assert.throws(()=>plan({[key]:value}),RangeError);count++}
assert.throws(()=>plan({stringArea:'invented selection'}),RangeError);count++;
const loose=plan({fretCondition:'Loose or moving fret'});test(loose.confidence,'technician check');test(loose.checks.length,2);test(loose.steps[0],'Secure the instrument and stop play tests.');test(!loose.steps.some(x=>/normal attack|Fit and tune|re-test/i.test(x)));
test(planBuzzInvestigation({}).confidence,'measurements incomplete');
const source=(await readFile(new URL('./assets/app.js',import.meta.url),'utf8')).replace(/^import .*$/gm,'');
const context=vm.createContext({document:{querySelector:()=>null},planBuzzInvestigation});new vm.Script(source+"\nthis.renderBuzz=logic['fret-buzz-diagnostic'];").runInContext(context);
const render=input=>context.renderBuzz(new Map(Object.entries({...base,...input})));
const html=render({});test(html.includes('0.10 mm')&&html.includes('1.50 mm'));test(html.includes('One-string priority'));test(html.includes('data-copy')&&html.includes('data-print'));test(html.includes('class="record-url"'));test(html.includes('https://guitarsetuplab.com/tools/fret-buzz-diagnostic.html'));
const invalid=render({relief:'-1'});test(invalid.includes('Check buzz measurements'));test(!invalid.includes('data-print'));test(!/NaN|Infinity/.test(html));
console.log(`Fret buzz input contract PASS: ${count} assertions.`);
