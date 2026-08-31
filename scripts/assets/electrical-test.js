const finite=(value,name)=>{const number=Number(value);if(!Number.isFinite(number))throw new RangeError(`${name} must be a finite number.`);return number};
const positive=(value,name)=>{const number=finite(value,name);if(number<=0)throw new RangeError(`${name} must be greater than zero.`);return number};
const nonnegative=(value,name)=>{const number=finite(value,name);if(number<0)throw new RangeError(`${name} must not be negative.`);return number};

export function analyzePickupDcr({readingState='Numeric reading',measurementMode='Direct pickup leads',measuredKOhm,expectedKOhm,tolerancePercent,volumePotKOhm}){
  const expected=positive(expectedKOhm,'Expected pickup DCR'),tolerance=nonnegative(tolerancePercent,'Entered tolerance');
  if(!['Numeric reading','OL / open','Near zero / short'].includes(readingState))throw new RangeError('Choose a supported meter reading state.');
  if(readingState!=='Numeric reading')return {readingState,measurementMode,state:readingState==='OL / open'?'open':'short',expectedKOhm:expected,tolerancePercent:tolerance,estimatedPickupKOhm:null,deltaPercent:null,withinTolerance:false};
  const measured=positive(measuredKOhm,'Measured resistance');
  let estimated=measured,pot=null;
  if(measurementMode==='At output jack with known volume pot'){
    pot=positive(volumePotKOhm,'Known volume pot resistance');
    if(measured>=pot)throw new RangeError('The jack reading must be lower than the known parallel volume-pot resistance.');
    estimated=1/(1/measured-1/pot);
  }else if(measurementMode!=='Direct pickup leads')throw new RangeError('Choose direct leads or the known-pot jack model.');
  const deltaPercent=(estimated-expected)/expected*100,withinTolerance=Math.abs(deltaPercent)<=tolerance;
  return {readingState,measurementMode,state:withinTolerance?'within-entered-tolerance':'outside-entered-tolerance',measuredKOhm:measured,expectedKOhm:expected,volumePotKOhm:pot,estimatedPickupKOhm:estimated,deltaPercent,tolerancePercent:tolerance,withinTolerance};
}

const parseSweep=readings=>{
  const rows=String(readings).split(/\r?\n/).map(x=>x.trim()).filter(Boolean).map((line,index)=>{
    const parts=line.split(/[,:\t]/).map(x=>x.trim()).filter(Boolean);
    if(parts.length!==2)throw new RangeError(`Sweep row ${index+1} must contain position and resistance.`);
    return {positionPercent:finite(parts[0],`Sweep row ${index+1} position`),resistanceKOhm:nonnegative(parts[1],`Sweep row ${index+1} resistance`)};
  });
  if(rows.length<5)throw new RangeError('Enter at least five sweep rows including 0% and 100%.');
  rows.sort((a,b)=>a.positionPercent-b.positionPercent);
  if(rows[0].positionPercent!==0||rows.at(-1).positionPercent!==100)throw new RangeError('The sweep must include 0% and 100% endpoints.');
  for(let i=0;i<rows.length;i++){
    if(rows[i].positionPercent<0||rows[i].positionPercent>100)throw new RangeError('Sweep positions must stay between 0% and 100%.');
    if(i&&rows[i].positionPercent===rows[i-1].positionPercent)throw new RangeError('Sweep positions must be unique.');
  }
  return rows;
};

export function analyzePotTaper({totalKOhm,readings,readingDirection='Resistance rises with rotation',maximumResidualPercent=12}){
  const total=positive(totalKOhm,'Measured total resistance'),limit=nonnegative(maximumResidualPercent,'Maximum entered residual');
  if(!['Resistance rises with rotation','Resistance falls with rotation'].includes(readingDirection))throw new RangeError('Choose the resistance direction used for the sweep.');
  const exponent=Math.log(.1)/Math.log(.5),rows=parseSweep(readings).map(row=>{
    if(row.resistanceKOhm>total*1.1)throw new RangeError('A sweep reading exceeds 110% of the entered total resistance.');
    const x=row.positionPercent/100,raw=row.resistanceKOhm/total,y=readingDirection==='Resistance rises with rotation'?raw:1-raw;
    return {...row,x,y};
  });
  const templates={linear:x=>x,'audio / logarithmic reference':x=>x**exponent,'reverse-audio reference':x=>1-(1-x)**exponent};
  const fits=Object.entries(templates).map(([name,fn])=>{
    const residuals=rows.map(row=>row.y-fn(row.x));
    return {name,rmsePercent:Math.sqrt(residuals.reduce((sum,x)=>sum+x*x,0)/residuals.length)*100,maximumResidualPercent:Math.max(...residuals.map(Math.abs))*100};
  }).sort((a,b)=>a.rmsePercent-b.rmsePercent);
  let monotonicViolations=0;for(let i=1;i<rows.length;i++)if(rows[i].y+1e-9<rows[i-1].y)monotonicViolations++;
  const nearest=fits[0],consistent=monotonicViolations===0&&nearest.maximumResidualPercent<=limit;
  return {totalKOhm:total,readingDirection,rows,fits,nearestReference:nearest.name,rmsePercent:nearest.rmsePercent,maximumResidualPercent:nearest.maximumResidualPercent,enteredMaximumResidualPercent:limit,monotonicViolations,consistent};
}

const splitLines=value=>String(value).split(/\r?\n/).map(x=>x.trim()).filter(Boolean);
export function mapSelectorContacts({lugNames,positionNames,closedPairs}){
  const lugs=String(lugNames).split(',').map(x=>x.trim()).filter(Boolean),positions=splitLines(positionNames),lines=splitLines(closedPairs);
  if(lugs.length<2||new Set(lugs).size!==lugs.length)throw new RangeError('Enter at least two unique comma-separated lug names.');
  if(!positions.length||new Set(positions).size!==positions.length)throw new RangeError('Enter unique switch position names.');
  if(lines.length!==positions.length)throw new RangeError('Enter exactly one closed-pair row for each switch position. Use "none" for no closed pair.');
  const order=new Map(lugs.map((x,i)=>[x,i]));
  const rows=lines.map((line,index)=>{
    const pairs=line.toLowerCase()==='none'?[]:line.split(',').map(x=>x.trim()).filter(Boolean).map(token=>{
      const parts=token.split('-').map(x=>x.trim());
      if(parts.length!==2||!order.has(parts[0])||!order.has(parts[1])||parts[0]===parts[1])throw new RangeError(`Invalid contact pair "${token}" in ${positions[index]}.`);
      return order.get(parts[0])<order.get(parts[1])?`${parts[0]}-${parts[1]}`:`${parts[1]}-${parts[0]}`;
    });
    const unique=[...new Set(pairs)].sort();
    return {position:positions[index],pairs:unique,signature:unique.join('|')||'none'};
  });
  const duplicateGroups=[];const bySignature=new Map();for(const row of rows){const names=bySignature.get(row.signature)||[];names.push(row.position);bySignature.set(row.signature,names)}for(const names of bySignature.values())if(names.length>1)duplicateGroups.push(names);
  const commonPairs=rows.length?[...rows[0].pairs].filter(pair=>rows.every(row=>row.pairs.includes(pair))):[];
  const used=new Set(rows.flatMap(row=>row.pairs.flatMap(pair=>pair.split('-'))));
  return {lugs,rows,commonPairs,duplicateGroups,unusedLugs:lugs.filter(lug=>!used.has(lug)),uniqueMaps:new Set(rows.map(row=>row.signature)).size};
}

export function checkCableGroundContinuity({testState='Disconnected and unpowered',leadResistanceOhm,continuityThresholdOhm,tipToTipOhm,sleeveToSleeveOhm,tipToSleeveState='OL / open',tipToSleeveOhm,sleeveToBridgeOhm,movementChangeOhm}){
  if(testState!=='Disconnected and unpowered')throw new RangeError('Disconnect the guitar and cable from every powered device before resistance or continuity testing.');
  const lead=nonnegative(leadResistanceOhm,'Meter-lead resistance'),threshold=positive(continuityThresholdOhm,'Entered continuity threshold');
  const adjust=(value,name)=>Math.max(0,nonnegative(value,name)-lead);
  const tip=adjust(tipToTipOhm,'Tip-to-tip reading'),sleeve=adjust(sleeveToSleeveOhm,'Sleeve-to-sleeve reading'),ground=adjust(sleeveToBridgeOhm,'Sleeve-to-bridge reading'),movement=nonnegative(movementChangeOhm,'Movement-change reading');
  if(!['OL / open','Numeric reading'].includes(tipToSleeveState))throw new RangeError('Choose OL/open or a numeric cross-conductor reading.');
  const cross=tipToSleeveState==='Numeric reading'?adjust(tipToSleeveOhm,'Tip-to-sleeve reading'):null;
  const conductorPass=tip<=threshold&&sleeve<=threshold,shortClear=tipToSleeveState==='OL / open'||cross>threshold,groundPass=ground<=threshold,movementPass=movement<=threshold;
  return {leadResistanceOhm:lead,continuityThresholdOhm:threshold,adjustedTipOhm:tip,adjustedSleeveOhm:sleeve,adjustedGroundOhm:ground,adjustedCrossOhm:cross,tipToSleeveState,movementChangeOhm:movement,conductorPass,shortClear,groundPass,movementPass,overallPass:conductorPass&&shortClear&&groundPass&&movementPass};
}
