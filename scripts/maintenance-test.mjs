import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
import {planMaintenanceReminders,reminderText,localPlanningDay} from './assets/maintenance.js';

let assertions=0;
const equal=(actual,expected)=>{assert.deepEqual(actual,expected);assertions++};
const rejects=(input)=>{assert.throws(()=>planMaintenanceReminders(input),RangeError);assertions++};
const base={planningDate:'2026-11-03',lastStringChange:'2026-10-01',stringCheckDays:'30',lastSetup:'2026-01-15',setupCheckMonths:'12'};
const result=planMaintenanceReminders(base);
equal(result.planningDate,'2026-11-03');
equal(result.strings.ageDays,33);
equal(result.strings.dueDate,'2026-10-31');
equal(result.strings.daysUntil,-3);
equal(result.strings.state,'reminder passed');
equal(result.setup.dueDate,'2027-01-15');
equal(result.setup.state,'upcoming');
equal(planMaintenanceReminders({...base,planningDate:'2026-10-31'}).strings.state,'check today');
equal(planMaintenanceReminders({...base,planningDate:'2026-10-30'}).strings.daysUntil,1);
equal(planMaintenanceReminders({...base,lastSetup:'2026-01-31',setupCheckMonths:'1'}).setup.dueDate,'2026-02-28');
equal(planMaintenanceReminders({...base,lastSetup:'2024-01-31',setupCheckMonths:'1'}).setup.dueDate,'2024-02-29');
equal(planMaintenanceReminders({...base,lastSetup:'2024-02-29',setupCheckMonths:'12'}).setup.dueDate,'2025-02-28');
equal(planMaintenanceReminders({...base,lastStringChange:'2026-10-31',stringCheckDays:'1'}).strings.dueDate,'2026-11-01');
equal(planMaintenanceReminders({...base,planningDate:'2026-03-09',lastStringChange:'2026-03-07',lastSetup:'2026-01-01'}).strings.ageDays,2);
equal(planMaintenanceReminders({...base,stringCheckDays:''}).strings.state,'interval not set');
equal(planMaintenanceReminders({...base,stringCheckDays:''}).strings.dueDate,null);
equal(planMaintenanceReminders({...base,lastStringChange:''}).strings.state,'history missing');
equal(planMaintenanceReminders({...base,lastStringChange:''}).strings.dueDate,null);
equal(planMaintenanceReminders({},'2026-11-03').planningDate,'2026-11-03');
equal(localPlanningDay(new Date(2026,0,2,23,59)),'2026-01-02');
for(const input of [
 {...base,planningDate:'2026-02-30'}, {...base,lastSetup:'2025-02-29'},
 {...base,lastStringChange:'2026-11-04'}, {...base,lastSetup:'2026-12-01'},
 {...base,planningDate:'not-a-date'}, {...base,lastSetup:'2026-1-15'},
 ...['0','-1','1.5','NaN','Infinity','36601'].map(stringCheckDays=>({...base,stringCheckDays})),
 ...['0','-1','1.5','1201'].map(setupCheckMonths=>({...base,setupCheckMonths})),
 {...base,planningDate:'9999-12-31',lastSetup:'9999-12-31',setupCheckMonths:'1'}
])rejects(input);
equal(reminderText(result.strings).includes('passed by 3 days'),true);
equal(reminderText(planMaintenanceReminders({}).strings).includes('missing history is not a passed check'),true);
equal(reminderText(planMaintenanceReminders({...base,stringCheckDays:''}).strings).includes('no next-check date is inferred'),true);

const source=(await readFile(new URL('./assets/app.js',import.meta.url),'utf8')).replace(/^import .*$/gm,'');
const context=vm.createContext({document:{querySelector:()=>null},planMaintenanceReminders,reminderText});
new vm.Script(source+'\nthis.renderMaintenance=logic[\'maintenance-schedule\'];').runInContext(context);
const render=input=>context.renderMaintenance(new Map(Object.entries({...base,usageFrequency:'Occasional',gigFrequency:'Never',humidityExposure:'Stable 40–55%',activeElectronics:'No',tremoloType:'None / fixed',...input})));
const output=render({});
equal(output.includes('2026-10-31'),true);
equal(output.includes('String inspection reminder'),true);
equal(output.includes('Setup inspection reminder'),true);
equal(output.includes('Planning date'),true);
equal(output.includes('https://guitarsetuplab.com/tools/maintenance-schedule.html'),true);
equal(output.includes('class="record-url"'),true);
equal(output.includes('data-copy')&&output.includes('data-print'),true);
const invalid=render({lastStringChange:'2026-11-04'});
equal(invalid.includes('Reminder cannot be calculated'),true);
equal(invalid.includes('data-print'),false);
equal(/NaN|Infinity/.test(output+invalid),false);
console.log(`Maintenance reminders PASS: ${assertions} assertions.`);
