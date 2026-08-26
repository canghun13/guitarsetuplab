import assert from 'node:assert/strict';
import {checkDiLoading,planReampLevel,levelToVrms,vrmsToDbu,checkPedalInsertHeadroom,calculateRoundTripAlignment,planDualMicAlignment} from './assets/recording.js';

let count=0;const near=(actual,expected,tolerance=1e-9)=>{assert.ok(Math.abs(actual-expected)<=tolerance,`${actual} != ${expected}`);count++};const equal=(actual,expected)=>{assert.deepEqual(actual,expected);count++};

const di=checkDiLoading({sourceOhms:10000,diInputKOhms:1000,parallelInputKOhms:1000,minimumRatio:10});near(di.equivalentLoadOhms,500000);near(di.loadRatio,50);near(di.retainedVoltage,50/51);equal(di.meetsEnteredRatio,true);
const diOnly=checkDiLoading({sourceOhms:1000000,diInputKOhms:10000,minimumRatio:10});near(diOnly.loadRatio,10);equal(diOnly.parallelInputOhms,null);

const reamp=planReampLevel({referenceDbfs:-18,returnedDbfs:-23.5,currentTrimDb:-2,toleranceDb:.5});near(reamp.deltaDb,5.5);near(reamp.proposedTrimDb,3.5);equal(reamp.direction,'raise');equal(planReampLevel({referenceDbfs:-18,returnedDbfs:-17,currentTrimDb:0,toleranceDb:.25}).direction,'lower');equal(planReampLevel({referenceDbfs:-18,returnedDbfs:-18.2,currentTrimDb:0,toleranceDb:.25}).withinTolerance,true);

near(levelToVrms(0,'dBu'),.775);near(levelToVrms(0,'dBV'),1);near(vrmsToDbu(.775),0);
const insert=checkPedalInsertHeadroom({sendNominal:0,sendUnit:'dBu',peakAboveNominalDb:6,pedalMaxInput:12,pedalMaxInputUnit:'dBu',pedalMaxOutput:8,pedalMaxOutputUnit:'dBu',returnNominal:4,returnUnit:'dBu',requiredInputHeadroomDb:3});near(insert.sendPeakDbu,6);near(insert.inputHeadroomDb,6);near(insert.outputMarginDb,4);equal(insert.inputPass,true);
const insertMixed=checkPedalInsertHeadroom({sendNominal:1,sendUnit:'Vrms',peakAboveNominalDb:0,pedalMaxInput:6,pedalMaxInputUnit:'dBV',pedalMaxOutput:1, pedalMaxOutputUnit:'Vrms',returnNominal:0,returnUnit:'dBV',requiredInputHeadroomDb:0});near(insertMixed.inputHeadroomDb,6);equal(insertMixed.inputPass,true);

const latency=calculateRoundTripAlignment({sampleRate:48000,referenceSample:1000,returnedSample:1480,existingCompensationSamples:128});near(latency.measuredSamples,480);near(latency.measuredMs,10);near(latency.remainingSamples,352);equal(latency.direction,'advance-return');equal(calculateRoundTripAlignment({sampleRate:44100,referenceSample:0,returnedSample:100,existingCompensationSamples:100}).direction,'aligned');

const mics=planDualMicAlignment({distanceUnit:'cm',mic1Distance:5,mic2Distance:39.33,temperatureC:20,sampleRate:48000,frequencyHz:1000});near(mics.speedMps,343.42);near(mics.delaySeconds,.3433/343.42,1e-6);equal(mics.farther,'microphone 2');equal(mics.direction,'delay-mic-1');
const same=planDualMicAlignment({distanceUnit:'in',mic1Distance:2,mic2Distance:2,temperatureC:20,sampleRate:44100,frequencyHz:440});near(same.sampleOffset,0);equal(same.farther,'neither');

let rejected=0;for(const run of [
  ()=>checkDiLoading({sourceOhms:0,diInputKOhms:1000,minimumRatio:10}),
  ()=>checkDiLoading({sourceOhms:10000,diInputKOhms:1000,parallelInputKOhms:-1,minimumRatio:10}),
  ()=>planReampLevel({referenceDbfs:1,returnedDbfs:-10,currentTrimDb:0,toleranceDb:1}),
  ()=>planReampLevel({referenceDbfs:-10,returnedDbfs:-12,currentTrimDb:0,toleranceDb:-1}),
  ()=>levelToVrms(0,'watts'),
  ()=>levelToVrms(0,'Vrms'),
  ()=>checkPedalInsertHeadroom({sendNominal:0,sendUnit:'dBu',peakAboveNominalDb:-1,pedalMaxInput:1,pedalMaxInputUnit:'Vrms',pedalMaxOutput:1,pedalMaxOutputUnit:'Vrms',returnNominal:1,returnUnit:'Vrms',requiredInputHeadroomDb:0}),
  ()=>calculateRoundTripAlignment({sampleRate:48000,referenceSample:20,returnedSample:10,existingCompensationSamples:0}),
  ()=>calculateRoundTripAlignment({sampleRate:0,referenceSample:0,returnedSample:10,existingCompensationSamples:0}),
  ()=>planDualMicAlignment({distanceUnit:'m',mic1Distance:1,mic2Distance:2,temperatureC:20,sampleRate:48000,frequencyHz:1000}),
  ()=>planDualMicAlignment({distanceUnit:'cm',mic1Distance:1,mic2Distance:2,temperatureC:100,sampleRate:48000,frequencyHz:1000}),
  ()=>planDualMicAlignment({distanceUnit:'cm',mic1Distance:1,mic2Distance:2,temperatureC:20,sampleRate:48000,frequencyHz:0})
]){try{run()}catch(error){assert.ok(error instanceof RangeError);rejected++;count++}}
equal(rejected,12);
console.log(`PASS: ${count} recording assertions`);
