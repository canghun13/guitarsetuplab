import assert from 'node:assert/strict';
import {MM_PER_INCH,toMm,fromMm,degToRad,radToDeg,calibrationCheck,tileLength,fretPositions,stringSpacing,bridgeSpacing,radiusFromChordSagitta,sagittaForRadius,interpolateRadius,saddleOffsets,multiscalePlan,breakAngle,neckAnglePlan,shimThickness} from './assets/geometry/index.js';

let fixtures=0;
const check=(condition,message)=>{fixtures++;assert.ok(condition,message)};
const close=(actual,expected,tolerance,message)=>check(Math.abs(actual-expected)<=tolerance,`${message}: ${actual} vs ${expected}`);
const rejects=(fn,message)=>{fixtures++;assert.throws(fn,undefined,message)};

// Units and fret positions.
close(toMm(1,'in'),25.4,1e-12,'inch to mm');
close(fromMm(25.4,'in'),1,1e-12,'mm to inch');
close(radToDeg(degToRad(37)),37,1e-12,'degree round trip');
const f255=fretPositions(toMm(25.5,'in'),24);
close(f255[11].positionMm,toMm(12.75,'in'),1e-9,'25.5 inch 12th fret');
close(f255[23].positionMm,toMm(25.5*.75,'in'),1e-9,'24th fret three quarters');
check(f255.every((x,i)=>!i||x.positionMm>f255[i-1].positionMm),'fret positions increase');
check(f255.every((x,i)=>!i||x.spacingMm<f255[i-1].spacingMm),'fret spacings decrease');
for(const scale of [24.75*MM_PER_INCH,34*MM_PER_INCH,628,650])close(fretPositions(scale,12)[11].positionMm,scale/2,1e-9,`12th fret half at ${scale}`);
close(fretPositions(toMm(25.5,'in'),12)[11].positionMm,fretPositions(647.7,12)[11].positionMm,1e-9,'mm/in fret equality');
rejects(()=>fretPositions(100,12),'invalid short scale');
rejects(()=>fretPositions(650,0),'zero frets');
rejects(()=>fretPositions(650,37),'excess fret count');

// Nut and bridge string spacing.
const guitarGauges=[.010,.013,.017,.026,.036,.046].map(x=>x*25.4);
const center=stringSpacing({count:6,widthMm:43,outerMarginMm:3,gaugesMm:guitarGauges,method:'Equal center'});
const gap=stringSpacing({count:6,widthMm:43,outerMarginMm:3,gaugesMm:guitarGauges,method:'Equal gap'});
check(center.centersMm.some((x,i)=>Math.abs(x-gap.centersMm[i])>.01),'equal center differs from equal gap');
close(center.leftEdgeMarginMm,3,1e-9,'left edge margin preserved');
close(center.rightEdgeMarginMm,3,1e-9,'right edge margin preserved');
check(center.edgeGapsMm.every(x=>x>0),'guitar gaps positive');
const same=[.5,.5,.5,.5,.5,.5],sameCenter=stringSpacing({count:6,widthMm:43,outerMarginMm:3,gaugesMm:same,method:'Equal center'}),sameGap=stringSpacing({count:6,widthMm:43,outerMarginMm:3,gaugesMm:same,method:'Equal gap'});
check(sameCenter.centersMm.every((x,i)=>Math.abs(x-sameGap.centersMm[i])<1e-9),'equal gauges produce same centers');
check(stringSpacing({count:4,widthMm:40,outerMarginMm:3,gaugesMm:[1,1.5,2,2.5],method:'Equal gap'}).centersMm.length===4,'four string bass');
check(stringSpacing({count:5,widthMm:48,outerMarginMm:3,gaugesMm:[1,1.3,1.7,2.2,2.8],method:'Equal gap'}).centersMm.length===5,'five string bass');
const inchPlan=stringSpacing({count:6,widthMm:toMm(1.6929133858,'in'),outerMarginMm:toMm(.1181102362,'in'),gaugesMm:guitarGauges,method:'Equal center'});
close(inchPlan.widthMm,43,1e-7,'spacing inch conversion');
const bridge=bridgeSpacing({count:6,bridgeWidthMm:70,outerSpreadMm:52,gaugesMm:guitarGauges,method:'Equal center',saddleWidthMm:8});
close(bridge.usedSpreadMm,52,1e-9,'bridge spread preserved');
close(bridge.outerMarginMm,9,1e-9,'bridge outer margin');
rejects(()=>stringSpacing({count:1,widthMm:43,outerMarginMm:3,gaugesMm:[.2]}),'invalid string count');
rejects(()=>stringSpacing({count:6,widthMm:10,outerMarginMm:1,gaugesMm:[3,3,3,3,3,3],method:'Equal gap'}),'overlapping strings');
rejects(()=>bridgeSpacing({count:6,bridgeWidthMm:50,outerSpreadMm:52,gaugesMm:guitarGauges}),'spread wider than bridge');

// Radius and saddle geometry.
const knownRadius=12*MM_PER_INCH,chord=50,sag=sagittaForRadius(knownRadius,chord);
close(radiusFromChordSagitta(chord,sag),knownRadius,1e-8,'radius inverse');
check(radiusFromChordSagitta(50,.1)>3000,'small sagitta produces large radius');
rejects(()=>radiusFromChordSagitta(20,11),'invalid sagitta');
close(interpolateRadius(10*MM_PER_INCH,16*MM_PER_INCH,250,500),13*MM_PER_INCH,1e-9,'compound interpolation');
const saddle=saddleOffsets({radiusMm:14*MM_PER_INCH,count:6,spacingMm:10.4,actionsMm:[1.6,1.65,1.7,1.75,1.85,2],gaugesMm:guitarGauges});
check(saddle.rows.length===6,'saddle row count');
check(saddle.rows.every(x=>Number.isFinite(x.relativeOffsetMm)&&x.relativeOffsetMm>=0),'saddle offsets finite');
check(saddle.rows[0].radiusRiseMm>saddle.rows[2].radiusRiseMm,'radius edge rises above center');

// Multiscale 2D coordinates.
const ordinary=multiscalePlan({trebleScaleMm:650,bassScaleMm:650,count:6,fretCount:24,perpendicularFret:7,nutSpreadMm:35,bridgeSpreadMm:52});
check(Math.max(...ordinary.strings.map(x=>x.nutXmm))-Math.min(...ordinary.strings.map(x=>x.nutXmm))<1e-9,'equal scales have straight nut');
check(Math.max(...ordinary.strings.map(x=>x.bridgeXmm))-Math.min(...ordinary.strings.map(x=>x.bridgeXmm))<1e-9,'equal scales have straight bridge');
close(ordinary.perpendicularDeviationMm,0,1e-9,'ordinary perpendicular fret');
for(const count of [6,7,8]){const plan=multiscalePlan({trebleScaleMm:635,bassScaleMm:686,count,fretCount:24,perpendicularFret:8,nutSpreadMm:7*(count-1),bridgeSpreadMm:10*(count-1)});check(plan.strings.length===count,`${count}-string multiscale`);close(plan.perpendicularDeviationMm,0,1e-9,`${count}-string perpendicular fret`);check(plan.frets.every(row=>row.points.every((p,i)=>!i||p.yMm>row.points[i-1].yMm)),`${count}-string coordinate order`)}
rejects(()=>multiscalePlan({trebleScaleMm:686,bassScaleMm:635,count:6,fretCount:24,perpendicularFret:8,nutSpreadMm:35,bridgeSpreadMm:52}),'reversed scale relation');
rejects(()=>multiscalePlan({trebleScaleMm:635,bassScaleMm:686,count:1,fretCount:24,perpendicularFret:8,nutSpreadMm:0,bridgeSpreadMm:0}),'invalid multiscale dimensions');

// Angles, neck projection, and shim geometry.
close(breakAngle(3,4).angleDeg,53.130102354,1e-9,'known break angle triangle');
close(breakAngle(100,0).angleDeg,0,1e-12,'zero break angle');
const neck=neckAnglePlan({scaleMm:650,bodyReferenceMm:0,bridgeHeightMm:18,fretboardThicknessMm:6,fretHeightMm:1,desiredActionMm:2,pocketDepthMm:0,projectionMm:600});
close(neck.riseMm,9,1e-12,'neck plane rise');
close(neck.angleDeg,radToDeg(Math.atan2(9,600)),1e-12,'neck angle');
const shim=shimThickness({angleDeg:1,shimLengthMm:60,pocketLengthMm:75});
close(shim.fullPocketDifferenceMm,Math.tan(degToRad(1))*75,1e-12,'full-pocket shim difference');
check(shim.fullPocketDifferenceMm>shim.shortShimDifferenceMm,'full pocket difference exceeds short shim');
rejects(()=>breakAngle(0,2),'zero angle run');

// Print calibration and tiling.
check(calibrationCheck(50,50,.25).withinTolerance,'50mm calibration passes');
check(calibrationCheck(50.8,50.8,.25).withinTolerance,'2 inch calibration passes');
check(!calibrationCheck(49.4,50,.25).withinTolerance,'calibration outside tolerance');
close(calibrationCheck(49,50,.25).correctionFactor,50/49,1e-12,'calibration correction factor');
const tiles=tileLength(647.7,267,12);
check(tiles.length===3,'long scale tiles to three landscape pages');
close(tiles[1].startMm,255,1e-12,'tile advance');
close(tiles.at(-1).endMm,647.7,1e-12,'last tile reaches scale');
check(tiles.every((x,i)=>x.page===i+1&&x.lengthMm>0),'tile order');
rejects(()=>tileLength(600,100,100),'invalid full overlap');

console.log(`Geometry fixtures PASS: ${fixtures} assertions.`);
