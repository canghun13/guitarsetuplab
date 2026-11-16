const choices={
  instrument:['Electric guitar','Acoustic guitar','Bass'],construction:['Solid-body','Semi-hollow','Acoustic'],
  buzzWhere:['Open string','Frets 1–4','Frets 5–12','Above fret 12','Across neck'],
  stringArea:['One string','Bass side','Treble side','Most strings'],amplified:['No','Yes','Not applicable'],
  recentChange:['None','String gauge','Tuning','Temperature or humidity','Hardware work'],
  fretCondition:['No visible issue','One raised or worn area','Loose or moving fret','Unknown'],
  climate:['Stable','Recent dry conditions','Recent humid conditions','Large change']
};

export function planBuzzInvestigation(input){
  const value=key=>String(input[key]??'').trim();
  for(const [key,allowed] of Object.entries(choices))if(value(key)&&!allowed.includes(value(key)))throw new RangeError(`Choose a listed ${key} observation.`);
  const gap=(key,label)=>{const raw=value(key);if(!raw)return null;const n=Number(raw);if(!Number.isFinite(n)||n<0)throw new RangeError(`${label} must be a finite, non-negative gap in millimetres, or blank.`);return raw+' mm'};
  const relief=gap('relief','Neck relief'),action=gap('action','String action');
  const instrument=value('instrument'),construction=value('construction'),where=value('buzzWhere'),strings=value('stringArea'),amp=value('amplified'),fret=value('fretCondition'),climate=value('climate'),recent=value('recentChange');
  const loose=fret==='Loose or moving fret',acoustic=instrument==='Acoustic guitar'||construction==='Acoustic';
  const checks=[];
  if(loose)checks.push('Stop playing: a loose or moving fret needs in-person inspection before further play tests or adjustments.');
  if(strings==='One string')checks.push('One-string priority: compare the affected string with adjacent strings at the same frets; inspect its string/contact path and local fret evidence before considering a whole-neck change.');
  else if(strings==='Bass side'||strings==='Treble side')checks.push(`${strings} pattern: compare both sides at the same frets and record side-specific relief and action; do not infer a twisted neck from this selection.`);
  else if(strings==='Most strings')checks.push('Most-string pattern: establish a repeatable relief/action baseline and map whether the same fret range is affected on each string; widespread buzz alone does not prove a neck adjustment is needed.');
  else checks.push('Affected strings not recorded: map each string before ranking a local versus neck-wide cause.');
  if(where==='Open string')checks.push('Open-string pattern: compare with the first fretted note to isolate string/contact or loose-part clues. Do not cut a nut slot from this result.');
  else if(where==='Frets 1–4')checks.push('Low-position pattern: compare the relief measurement method and local fret evidence before any bridge or neck change.');
  else if(where==='Frets 5–12')checks.push('Middle-neck pattern: map the first and last buzzing fret, then compare the affected string with neighboring strings and repeated relief readings.');
  else if(where==='Above fret 12')checks.push('Upper-neck pattern: record action at a named fret and inspect localized upper-fret evidence; do not treat a truss-rod change as a universal solution.');
  else checks.push('Map the first and last buzzing fret on each affected string; an across-neck report still needs a measured fret/string pattern.');
  checks.push(relief?`Recorded relief: ${relief}. Repeat with the same capo/fretting references and string, then compare with the exact instrument maker’s method; this number alone is not a low/high verdict.`:'Relief unknown: measure the gap with a documented capo/fretting method before interpreting neck curvature; blank is not zero.');
  checks.push(action?`Recorded action: ${action}. Confirm the fret, string and top-of-fret to underside-of-string datum before comparing; no universal target or adjustment amount is inferred.`:'Action unknown: record the string and measurement fret before comparing heights; blank is not zero.');
  if(instrument==='Bass')checks.push('Bass context: use the maker’s bass measurement method and the affected bass string, not a guitar target copied without its conditions.');
  else if(instrument==='Electric guitar')checks.push('Electric-guitar context: compare the same phrase and attack through the normal amplifier path, unless a stop condition applies.');
  if(acoustic)checks.push('Acoustic construction/context: separate string/fret contact from body or internal rattles. Structural movement or suspected loose internal parts needs physical inspection, not bridge, nut or brace work from this result.');
  else if(construction==='Semi-hollow')checks.push('Semi-hollow context: compare body, pickup and hardware rattles with string/fret contact; the body construction alone does not identify a cause.');
  else if(construction==='Solid-body')checks.push('Solid-body context: check accessible loose hardware without assuming every rattle comes from the frets.');
  if(amp==='No'&&!acoustic)checks.push('Not heard through the amplifier: acoustic rattle may be tolerable, but still check loose parts and sustain; this is not proof that the instrument is defect-free.');
  else if(amp==='Yes')checks.push('Heard through the amplifier: verify the same fret/string pattern through the normal signal path; amplified audibility does not identify its mechanical cause.');
  else if(amp==='Not applicable'||acoustic)checks.push('Use the normal listening/recording context; an amplifier test is not required when it is not applicable.');
  if(climate&&climate!=='Stable')checks.push(`Climate observation: ${climate.toLowerCase()}. Record actual humidity and compare with the prior baseline before adjustments; the selection alone does not diagnose dry or wet wood.`);
  else if(climate==='Stable')checks.push('Stable reported climate: retain the measurement date and conditions; a stable label does not rule out environmental change.');
  else checks.push('Climate not recorded: retain actual measurement conditions rather than assuming a stable environment.');
  if(fret==='One raised or worn area')checks.push('Localized fret clue: a short straightedge/rocker is only a clue for in-person verification, never permission to level or remove material.');
  else if(fret==='Unknown')checks.push('Fret condition unknown: do not report the frets as level or sound without inspection.');
  if(recent&&recent!=='None')checks.push(`Recent ${recent.toLowerCase()} change: compare with the recorded before-change baseline rather than compensating blindly.`);
  const facts=[['Instrument',instrument||'Not recorded'],['Construction',construction||'Not recorded'],['Buzz location',where||'Not recorded'],['Affected strings',strings||'Not recorded'],['Amplified audibility',amp||'Not recorded'],['Recorded relief',relief||'Not recorded (mm)'],['Recorded action',action||'Not recorded (mm)'],['Recent change',recent||'Not recorded'],['Fret clues',fret||'Not recorded'],['Climate observation',climate||'Not recorded']];
  const steps=loose?['Secure the instrument and stop play tests.','Keep the observation record for a qualified technician; do not reseat, level, cut or adjust from this result.']:['Tune stable strings and use normal playing position.','Record the exact fret/string map and the measurement method.','Repeat the recorded relief/action readings without changing either.','Compare normal attack in the applicable listening context.','If the cause remains uncertain, stop and seek a qualified inspection; no adjustment amount is authorized.'];
  return {confidence:loose?'technician check':relief===null||action===null?'measurements incomplete':'possible causes',checks:loose?[checks[0],'Retain the entered observations for inspection; do not perform the normal play-test sequence while the fret is moving.']:checks,steps,facts};
}
