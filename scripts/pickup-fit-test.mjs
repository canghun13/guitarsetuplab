import assert from 'node:assert/strict';
import {projectStringSpread,comparePoleSpacing,checkRouteClearance,checkRingMountFit} from './assets/pickup-fit.js';

let count=0;const check=(actual,expected,message)=>{assert.deepEqual(actual,expected,message);count++};
const near=(actual,expected,message)=>{assert.ok(Math.abs(actual-expected)<1e-9,message);count++};

const bridge=projectStringSpread({nutSpreadMm:35,bridgeSpreadMm:52,scaleMm:648,positionMm:648});near(bridge.spreadMm,52,'bridge spread endpoint');
const middle=projectStringSpread({nutSpreadMm:35,bridgeSpreadMm:52,scaleMm:648,positionMm:324});near(middle.spreadMm,43.5,'linear midpoint');
check(comparePoleSpacing({stringSpreadMm:52,poleSpreadMm:50,toleranceMm:1}).withinTolerance,true,'per-side tolerance');
check(comparePoleSpacing({stringSpreadMm:52,poleSpreadMm:49,toleranceMm:1}).withinTolerance,false,'pole mismatch outside tolerance');
const routePass=checkRouteClearance({cavityLengthMm:72,cavityWidthMm:40,cavityDepthMm:20,pickupLengthMm:70,pickupWidthMm:38,pickupDepthMm:18,allowanceMm:1});check(routePass.clearsRectangle,true,'route clearance pass');
const routeFail=checkRouteClearance({cavityLengthMm:69,cavityWidthMm:40,cavityDepthMm:20,pickupLengthMm:70,pickupWidthMm:38,pickupDepthMm:18,allowanceMm:0});check(routeFail.clearsRectangle,false,'negative route clearance');
const ring=checkRingMountFit({pickupLengthMm:70,pickupWidthMm:38,openingLengthMm:71,openingWidthMm:39,existingScrewXmm:78,existingScrewYmm:32,candidateScrewXmm:78.2,candidateScrewYmm:31.8,screwToleranceMm:.25});check(ring.openingClears,true,'ring opening');check(ring.screwsAlign,true,'ring screw tolerance');
let rejected=0;for(const run of [
  ()=>projectStringSpread({nutSpreadMm:35,bridgeSpreadMm:52,scaleMm:648,positionMm:700}),
  ()=>comparePoleSpacing({stringSpreadMm:0,poleSpreadMm:50,toleranceMm:1}),
  ()=>checkRouteClearance({cavityLengthMm:72,cavityWidthMm:40,cavityDepthMm:20,pickupLengthMm:70,pickupWidthMm:38,pickupDepthMm:18,allowanceMm:-1}),
  ()=>projectStringSpread({nutSpreadMm:'',bridgeSpreadMm:52,scaleMm:648,positionMm:600}),
  ()=>comparePoleSpacing({stringSpreadMm:52,poleSpreadMm:Number.NaN,toleranceMm:1}),
  ()=>checkRingMountFit({pickupLengthMm:70,pickupWidthMm:38,openingLengthMm:71,openingWidthMm:39,existingScrewXmm:78,existingScrewYmm:32,candidateScrewXmm:Infinity,candidateScrewYmm:32,screwToleranceMm:.25})
]){try{run()}catch(error){assert.ok(error instanceof RangeError);rejected++;count++}}
check(rejected,6,'empty, negative, out-of-range, NaN, and Infinity inputs rejected');
console.log(`PASS: ${count} pickup-fit assertions`);
