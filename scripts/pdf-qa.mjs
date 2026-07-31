import {createRequire} from 'node:module';
import {mkdir,writeFile} from 'node:fs/promises';
import path from 'node:path';

const require=createRequire(import.meta.url);
const {chromium}=require('playwright');
const {PDFDocument}=require('pdf-lib');
const base=process.env.QA_BASE_URL||'http://127.0.0.1:4173';
const out=path.resolve(process.env.QA_PDF_OUTPUT||'tests/output/print');
const chrome=process.env.CHROME_PATH||'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const selected=process.argv.slice(2);

const documents={
  'guitar-repair-intake':{values:{customer:'Alexandra Montgomery-Worthington — long customer name for pagination QA',brand:'North River Custom Instruments',model:'Extended Model Name with Detailed Shop Identification',serial:'QA-INTAKE-2026-0000000000001',reportedProblem:'Intermittent output loss after transport, crackling when the cable moves, tuning drift after bends, and a high-action concern across the upper register. '.repeat(5),visibleDamage:'Finish checking near the output jack and a small edge mark. Observation only; hidden condition not inferred.',notes:'Long intake note. '.repeat(45)}},
  'repair-quote-generator':{values:{customer:'Alexandra Montgomery-Worthington',instrumentName:'North River Custom Extended Model / Serial QA-QUOTE-00001',quoteNumber:'QA-2026-0042',laborRows:Array.from({length:10},(_,i)=>`Labor operation ${i+1} with detailed description | ${i%3+1} | ${45+i*3.25}`).join('\n'),partsRows:Array.from({length:12},(_,i)=>`Replacement part ${i+1} with descriptive catalog wording | ${i%2+1} | ${8.5+i*4.1}`).join('\n'),taxPercent:'8.25',discount:'15',deposit:'100',quoteValidity:'14 days',notes:'Estimate notes and limitations. '.repeat(30)}},
  'parts-labor-job-sheet':{values:{customer:'Alexandra Montgomery-Worthington',instrumentName:'North River Custom Extended Model / Serial QA-JOB-00001',jobNumber:'JOB-2026-0042',technician:'QA Technician',diagnosis:'Detailed diagnosis. '.repeat(45),workPerformed:'Detailed work performed. '.repeat(55),laborRows:Array.from({length:12},(_,i)=>`Labor ${i+1} | ${i+1}.0 hours | verified`).join('\n'),partsRows:Array.from({length:14},(_,i)=>`Part ${i+1} | quantity ${i%3+1} | installed`).join('\n'),before:'Before measurements. '.repeat(25),after:'After measurements. '.repeat(25),additionalIssues:'Additional finding. '.repeat(20),finalTest:'Final test result. '.repeat(24),internalNotes:'Internal note. '.repeat(25)}},
  'customer-approval-checklist':{values:{customer:'Alexandra Montgomery-Worthington',instrumentName:'North River Custom Extended Model / Serial QA-APPROVAL-00001',customSettings:'Custom tuning, pickup switching, tremolo float, preferred action and string gauge details. '.repeat(20),notes:'Customer workflow preference note. '.repeat(25)}},
  'maintenance-schedule':{values:{lastSetup:'2026-01-15',lastStringChange:'2026-07-01'}},
  'setup-measurement-sheet':{values:{customer:'Alexandra Montgomery-Worthington',instrumentName:'North River Custom Extended Model / Serial QA-MEASURE-00001',relief:'0.20',bassAction:'2.00',trebleAction:'1.60',pickupBass:'2.50',pickupTreble:'2.00',notes:'Repeated measurement context and environmental notes. '.repeat(40)}},
  'before-after-setup-card':{values:{customer:'Alexandra Montgomery-Worthington',instrumentName:'North River Custom Extended Model / Serial QA-BEFORE-AFTER-00001',before:'Before measurements and symptoms. '.repeat(35),work:'Work performed and verification sequence. '.repeat(45),after:'After measurements and play-test observations. '.repeat(35),notes:'Remaining limitations. '.repeat(25)}},
  'guitar-condition-report':{values:{customer:'Alexandra Montgomery-Worthington',instrumentName:'North River Custom Extended Model / Serial QA-CONDITION-00001',playability:'Playability observation. '.repeat(45),notes:'Condition limitation and untested-area note. '.repeat(40)}},
  'fret-position-template':{geometry:true,values:{geometryScale:'25.5',geometryUnit:'in',fretCount:'24',measurementReference:'Nut witness point',compensationNote:'Nominal fret coordinates; saddle compensation is separate.',printMode:'Table and reference ruler',paperSize:'A4',orientation:'Portrait',calibrationMeasured:'50',calibrationTolerance:'0.25'}},
  'fret-slot-print-template':{geometry:true,values:{geometryScale:'25.5',geometryUnit:'in',fretCount:'24',stripWidth:'1.75',centerline:'Yes',slotMarkLength:'1.25',labelFrequency:'1',pageTiling:'Automatic with overlap',overlap:'0.5',paperSize:'A4',orientation:'Portrait',calibrationMeasured:'50',calibrationTolerance:'0.25'}},
  'nut-string-spacing':{geometry:true,values:{stringCount:'6',nutWidth:'1.65',marginMode:'Outer string centers',outerMargin:'0.14',stringGauges:'0.010,0.013,0.017,0.026,0.036,0.046',spacingMethod:'Equal edge gaps',geometryUnit:'in',calibrationMeasured:'50',calibrationTolerance:'0.25'}},
  'bridge-string-spacing':{geometry:true,values:{bridgeStringCount:'6',bridgeWidth:'2.10',outerSpread:'2.052',bridgeGauges:'0.010,0.013,0.017,0.026,0.036,0.046',bridgeSpacingMethod:'Equal centers',saddleWidth:'0.40',bridgeType2:'Six independent saddles',geometryUnit:'in',calibrationMeasured:'50',calibrationTolerance:'0.25'}}
};

const wanted=selected.length?Object.fromEntries(Object.entries(documents).filter(([slug])=>selected.includes(slug))):documents;
if(!Object.keys(wanted).length)throw new Error('No matching PDF QA slugs.');
await mkdir(out,{recursive:true});
const browser=await chromium.launch({headless:true,executablePath:chrome});
const report=[];
try{
  for(const [slug,{values,geometry=false}] of Object.entries(wanted)){
    const page=await browser.newPage({viewport:{width:1440,height:1000}});
    await page.goto(`${base}/tools/${slug}.html`,{waitUntil:'load'});
    const fillAndRun=async(paper)=>page.evaluate(({values,paper})=>{
      const fallback='Long QA text for wrapping, pagination, and black-and-white readability. '.repeat(8);
      for(const el of document.querySelectorAll('input,textarea,select')){
        const supplied=el.name==='paperSize'?paper:values[el.name];
        if(supplied!=null)el.value=String(supplied);
        else if(el.tagName==='TEXTAREA')el.value=fallback;
        else if(el.type==='date')el.value='2026-07-31';
        else if(el.type==='number')el.value=el.name==='strings'?'6':'1.5';
        else if(el.tagName==='INPUT'&&el.type!=='checkbox')el.value=`QA ${el.name} value`;
        el.dispatchEvent(new Event('input',{bubbles:true}));
        el.dispatchEvent(new Event('change',{bubbles:true}));
      }
      document.querySelector('form').requestSubmit();
    },{values,paper});
    for(const [paper,format,expected] of [['a4','A4',[595.28,841.89]],['letter','Letter',[612,792]]]){
      await fillAndRun(format);
      await page.waitForFunction(()=>!document.querySelector('.result h2')?.textContent.includes('Ready'));
      const resultText=await page.locator('.result').innerText();
      if(/Tool error|Check quote rows|Check geometry inputs|invalid input/i.test(resultText))throw new Error(`${slug}: generated an error result`);
      let calibration=null;
      if(geometry){
        calibration=await page.evaluate(()=>({bar50Px:document.querySelector('.bar-50')?.getBoundingClientRect().width,bar2inPx:document.querySelector('.bar-2in')?.getBoundingClientRect().width,status:document.querySelector('.calibration-status')?.textContent}));
        if(Math.abs(calibration.bar50Px-50*96/25.4)>.2||Math.abs(calibration.bar2inPx-192)>.2||!calibration.status.includes('Within'))throw new Error(`${slug}-${paper}: browser calibration geometry failed`);
      }
      const file=path.join(out,`${slug}-${paper}.pdf`);
      const bytes=await page.pdf({path:file,format,landscape:false,printBackground:true,displayHeaderFooter:false,preferCSSPageSize:geometry,scale:1,margin:{top:'10mm',right:'10mm',bottom:'10mm',left:'10mm'}});
      const pdf=await PDFDocument.load(bytes);
      const pages=pdf.getPages(),size=pages[0].getSize();
      const sizeOk=Math.abs(size.width-expected[0])<1&&Math.abs(size.height-expected[1])<1;
      const hasContents=pages.every(p=>Boolean(p.node.Contents()));
      report.push({slug,paper,pages:pages.length,widthPt:+size.width.toFixed(2),heightPt:+size.height.toFixed(2),sizeOk,hasContents,bytes:bytes.length,calibration});
      if(!sizeOk||!hasContents)throw new Error(`${slug}-${paper}: PDF structure check failed`);
    }
    await page.close();
  }
}finally{await browser.close()}
await writeFile(path.join(out,'report.json'),JSON.stringify(report,null,2));
console.log(JSON.stringify({files:report.length,report},null,2));
