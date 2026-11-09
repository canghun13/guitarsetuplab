const DAY_MS=86400000;
const isoDay=date=>date.toISOString().slice(0,10);

function parseDay(value,label){
  if(!/^\d{4}-\d{2}-\d{2}$/.test(value))throw new RangeError(`${label} must be a valid YYYY-MM-DD date.`);
  const date=new Date(value+'T00:00:00Z');
  if(!Number.isFinite(date.getTime())||isoDay(date)!==value)throw new RangeError(`${label} must be a real calendar date.`);
  return date;
}
function optionalInterval(value,label,max){
  if(value==null||String(value).trim()==='')return null;
  const number=Number(value);
  if(!Number.isInteger(number)||number<1||number>max)throw new RangeError(`${label} must be a whole number from 1 to ${max}, or blank.`);
  return number;
}
function addInterval(date,amount,unit){
  const due=new Date(date);
  if(unit==='days')due.setUTCDate(due.getUTCDate()+amount);
  else{
    const day=due.getUTCDate();
    due.setUTCDate(1);
    due.setUTCMonth(due.getUTCMonth()+amount);
    const end=new Date(due);
    end.setUTCMonth(end.getUTCMonth()+1,0);
    due.setUTCDate(Math.min(day,end.getUTCDate()));
  }
  if(due.getUTCFullYear()>9999)throw new RangeError('The reminder date exceeds year 9999; use a shorter interval.');
  return due;
}

// Use the visitor's local calendar day only when no explicit planning date is entered.
export function localPlanningDay(now=new Date()){
  return `${String(now.getFullYear()).padStart(4,'0')}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
}

export function planMaintenanceReminders(input,today=localPlanningDay()){
  const planningDate=String(input.planningDate||today),asOf=parseDay(planningDate,'Planning date');
  const stringDays=optionalInterval(input.stringCheckDays,'String check interval (days)',36600);
  const setupMonths=optionalInterval(input.setupCheckMonths,'Setup check interval (months)',1200);
  const row=(name,value,interval,unit)=>{
    const lastDate=String(value||'');
    if(!lastDate)return {name,lastDate:null,ageDays:null,interval,unit,dueDate:null,daysUntil:null,state:'history missing'};
    const last=parseDay(lastDate,`Last ${name} date`);
    const ageDays=(asOf-last)/DAY_MS;
    if(ageDays<0)throw new RangeError(`Last ${name} date cannot be after the planning date.`);
    if(interval===null)return {name,lastDate,ageDays,interval,unit,dueDate:null,daysUntil:null,state:'interval not set'};
    const due=addInterval(last,interval,unit),daysUntil=(due-asOf)/DAY_MS;
    return {name,lastDate,ageDays,interval,unit,dueDate:isoDay(due),daysUntil,state:daysUntil<0?'reminder passed':daysUntil===0?'check today':'upcoming'};
  };
  return {planningDate,strings:row('string change',input.lastStringChange,stringDays,'days'),setup:row('setup',input.lastSetup,setupMonths,'months')};
}

export function reminderText(row){
  if(row.state==='history missing')return 'Last service date unknown. Record an observed baseline before calculating a dated reminder; missing history is not a passed check.';
  const age=`Last recorded ${row.name}: ${row.lastDate} (${row.ageDays} day${row.ageDays===1?'':'s'} before the planning date).`;
  if(row.state==='interval not set')return age+' No personal interval entered, so no next-check date is inferred.';
  const timing=row.daysUntil<0?`reminder passed by ${-row.daysUntil} day${row.daysUntil===-1?'':'s'}`:row.daysUntil===0?'check today':`in ${row.daysUntil} day${row.daysUntil===1?'':'s'}`;
  return `${age} Personal inspection reminder: ${row.dueDate} (${row.interval} ${row.interval===1?row.unit.slice(0,-1):row.unit} after the recorded service); ${timing}. Inspect condition; this is not a replacement or adjustment deadline.`;
}
