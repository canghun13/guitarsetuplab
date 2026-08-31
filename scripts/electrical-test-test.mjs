import assert from 'node:assert/strict';
import {analyzePickupDcr,analyzePotTaper,mapSelectorContacts,checkCableGroundContinuity} from './assets/electrical-test.js';

let count=0;const near=(actual,expected,tolerance=1e-9)=>{assert.ok(Math.abs(actual-expected)<=tolerance,`${actual} != ${expected}`);count++};const equal=(actual,expected)=>{assert.deepEqual(actual,expected);count++};

const direct=analyzePickupDcr({readingState:'Numeric reading',measurementMode:'Direct pickup leads',measuredKOhm:7.4,expectedKOhm:7.5,tolerancePercent:5});near(direct.estimatedPickupKOhm,7.4);equal(direct.withinTolerance,true);
const jack=analyzePickupDcr({readingState:'Numeric reading',measurementMode:'At output jack with known volume pot',measuredKOhm:7.3891625616,expectedKOhm:7.5,tolerancePercent:1,volumePotKOhm:500});near(jack.estimatedPickupKOhm,7.5,1e-7);equal(jack.withinTolerance,true);
equal(analyzePickupDcr({readingState:'OL / open',expectedKOhm:8,tolerancePercent:10}).state,'open');
equal(analyzePickupDcr({readingState:'Near zero / short',expectedKOhm:8,tolerancePercent:10}).state,'short');

const linear=analyzePotTaper({totalKOhm:500,readings:'0,0\n25,125\n50,250\n75,375\n100,500',maximumResidualPercent:2});equal(linear.nearestReference,'linear');equal(linear.consistent,true);near(linear.rmsePercent,0);
const audio=analyzePotTaper({totalKOhm:500,readings:'0,0\n25,5\n50,50\n75,192\n100,500',maximumResidualPercent:2});equal(audio.nearestReference,'audio / logarithmic reference');equal(audio.monotonicViolations,0);
const falling=analyzePotTaper({totalKOhm:500,readings:'0,500\n25,375\n50,250\n75,125\n100,0',readingDirection:'Resistance falls with rotation',maximumResidualPercent:2});equal(falling.nearestReference,'linear');

const mapped=mapSelectorContacts({lugNames:'C,B,N',positionNames:'Bridge\nBoth\nNeck',closedPairs:'C-B\nC-B,C-N\nC-N'});equal(mapped.uniqueMaps,3);equal(mapped.rows[1].pairs,['C-B','C-N']);equal(mapped.unusedLugs,[]);equal(mapped.commonPairs,[]);
const duplicate=mapSelectorContacts({lugNames:'1,2,3',positionNames:'A\nB',closedPairs:'1-2\n2-1'});equal(duplicate.duplicateGroups,[['A','B']]);

const good=checkCableGroundContinuity({leadResistanceOhm:.2,continuityThresholdOhm:1,tipToTipOhm:.5,sleeveToSleeveOhm:.4,tipToSleeveState:'OL / open',sleeveToBridgeOhm:.6,movementChangeOhm:.1});equal(good.overallPass,true);near(good.adjustedTipOhm,.3);
const shorted=checkCableGroundContinuity({leadResistanceOhm:.2,continuityThresholdOhm:1,tipToTipOhm:.5,sleeveToSleeveOhm:.4,tipToSleeveState:'Numeric reading',tipToSleeveOhm:.3,sleeveToBridgeOhm:.6,movementChangeOhm:.1});equal(shorted.shortClear,false);equal(shorted.overallPass,false);

let rejected=0;for(const run of [
  ()=>analyzePickupDcr({readingState:'Numeric reading',measurementMode:'At output jack with known volume pot',measuredKOhm:500,expectedKOhm:8,tolerancePercent:10,volumePotKOhm:500}),
  ()=>analyzePickupDcr({readingState:'bad',expectedKOhm:8,tolerancePercent:10}),
  ()=>analyzePotTaper({totalKOhm:500,readings:'0,0\n50,250\n100,500'}),
  ()=>analyzePotTaper({totalKOhm:500,readings:'0,0\n25,125\n25,130\n75,375\n100,500'}),
  ()=>mapSelectorContacts({lugNames:'A,A',positionNames:'One',closedPairs:'none'}),
  ()=>mapSelectorContacts({lugNames:'A,B',positionNames:'One\nTwo',closedPairs:'A-B'}),
  ()=>mapSelectorContacts({lugNames:'A,B',positionNames:'One',closedPairs:'A-C'}),
  ()=>checkCableGroundContinuity({testState:'Connected',leadResistanceOhm:0,continuityThresholdOhm:1,tipToTipOhm:0,sleeveToSleeveOhm:0,tipToSleeveState:'OL / open',sleeveToBridgeOhm:0,movementChangeOhm:0})
]){try{run()}catch(error){assert.ok(error instanceof RangeError);rejected++;count++}}
equal(rejected,8);
console.log(`PASS: ${count} electrical-test assertions`);
