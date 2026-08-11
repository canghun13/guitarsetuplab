const finite=(name,value,{min=0,allowZero=false}={})=>{const number=Number(value);if(!Number.isFinite(number)||(allowZero?number<min:number<=min))throw new RangeError(`${name} must be ${allowZero?'at least':'greater than'} ${min}.`);return number};
const clearance=(available,required)=>available-required;
const state=(values)=>values.every(value=>value>=0)?'clear':values.some(value=>value<0)?'conflict':'verify';

export function checkPotMountingFit(input){
 const hole=finite('Existing hole diameter',input.holeDiameterMm),bushing=finite('Candidate bushing diameter',input.bushingDiameterMm),panel=finite('Panel thickness',input.panelThicknessMm),thread=finite('Threaded bushing length',input.threadLengthMm),stack=finite('Outer hardware stack',input.hardwareStackMm,{allowZero:true}),body=finite('Component body depth',input.bodyDepthMm),cavity=finite('Cavity depth',input.cavityDepthMm),allowance=finite('Depth allowance',input.depthAllowanceMm,{allowZero:true});
 const holeClearanceMm=clearance(hole,bushing),threadClearanceMm=clearance(thread,panel+stack),depthClearanceMm=clearance(cavity,body+allowance);
 return {holeClearanceMm,threadClearanceMm,depthClearanceMm,state:state([holeClearanceMm,threadClearanceMm,depthClearanceMm])};
}

export function checkKnobShaftFit(input){
 const knobBore=finite('Knob bore',input.knobBoreMm),shaft=finite('Shaft diameter',input.shaftDiameterMm),tolerance=finite('Diameter tolerance',input.diameterToleranceMm,{allowZero:true}),shaftHeight=finite('Usable shaft height',input.shaftHeightMm),insertion=finite('Knob insertion depth',input.insertionDepthMm),minimum=finite('Minimum engagement',input.minimumEngagementMm);
 const attachment=String(input.attachment||''),shaftType=String(input.shaftType||''),shaftSpline=String(input.shaftSpline||''),knobSpline=String(input.knobSpline||'');
 if(!['Set screw','Press fit'].includes(attachment))throw new RangeError('Choose a knob attachment method.');
 if(!['Solid','Split'].includes(shaftType))throw new RangeError('Choose a shaft construction.');
 const diameterDeltaMm=knobBore-shaft,diameterCompatible=Math.abs(diameterDeltaMm)<=tolerance,engagementMm=Math.min(shaftHeight,insertion),heightClearanceMm=engagementMm-minimum;
 const interfaceCompatible=attachment==='Set screw'?diameterCompatible:(shaftType==='Split'&&diameterCompatible&&knobSpline!=='Unknown'&&shaftSpline===knobSpline);
 return {diameterDeltaMm,engagementMm,heightClearanceMm,interfaceCompatible,state:interfaceCompatible&&heightClearanceMm>=0?'clear':'conflict',caution:attachment==='Set screw'&&shaftType==='Split'?'Align the set screw with the shaft split and verify the maker permits this interface.':''};
}

export function checkSwitchClearance(input){
 const opening=finite('Existing opening',input.openingMm),mount=finite('Candidate mounting size',input.mountingMm),panel=finite('Panel thickness',input.panelThicknessMm),thread=finite('Mounting thread length',input.threadLengthMm),stack=finite('Outer hardware stack',input.hardwareStackMm,{allowZero:true}),body=finite('Switch body depth',input.bodyDepthMm),terminal=finite('Terminal and wire allowance',input.terminalAllowanceMm,{allowZero:true}),cavity=finite('Cavity depth',input.cavityDepthMm),travel=finite('Lever travel',input.leverTravelMm,{allowZero:true}),top=finite('Available top clearance',input.topClearanceMm,{allowZero:true});
 const openingClearanceMm=clearance(opening,mount),threadClearanceMm=clearance(thread,panel+stack),depthClearanceMm=clearance(cavity,body+terminal),leverClearanceMm=clearance(top,travel);
 return {openingClearanceMm,threadClearanceMm,depthClearanceMm,leverClearanceMm,state:state([openingClearanceMm,threadClearanceMm,depthClearanceMm,leverClearanceMm])};
}

export function checkJackMountingFit(input){
 const hole=finite('Existing mounting hole',input.holeDiameterMm),bushing=finite('Jack bushing diameter',input.bushingDiameterMm),panel=finite('Panel stack',input.panelStackMm),thread=finite('Jack bushing length',input.bushingLengthMm),hardware=finite('Outer hardware stack',input.hardwareStackMm,{allowZero:true}),body=finite('Jack body depth',input.bodyDepthMm),plugProjection=finite('Plug insertion projection',input.plugProjectionMm,{allowZero:true}),depth=finite('Available cavity depth',input.cavityDepthMm),plugWidth=finite('Plug body width',input.plugWidthMm),side=finite('Available side width',input.sideWidthMm),allowance=finite('Service allowance',input.serviceAllowanceMm,{allowZero:true});
 const holeClearanceMm=clearance(hole,bushing),threadClearanceMm=clearance(thread,panel+hardware),depthClearanceMm=clearance(depth,body+plugProjection+allowance),sideClearanceMm=clearance(side,plugWidth+2*allowance);
 return {holeClearanceMm,threadClearanceMm,depthClearanceMm,sideClearanceMm,state:state([holeClearanceMm,threadClearanceMm,depthClearanceMm,sideClearanceMm])};
}

export function parseCoordinateList(text){
 const lines=String(text||'').split(/\r?\n/).map(line=>line.trim()).filter(Boolean);if(!lines.length)throw new RangeError('Enter at least two x,y coordinate rows.');
 const points=lines.map((line,index)=>{const values=line.split(',').map(value=>Number(value.trim()));if(values.length!==2||values.some(value=>!Number.isFinite(value)))throw new RangeError(`Coordinate row ${index+1} must be x,y.`);return {x:values[0],y:values[1]}});if(points.length<2)throw new RangeError('Enter at least two x,y coordinate rows.');return points;
}

export function matchHarnessLayout(input){
 const existing=parseCoordinateList(input.existingCoordinates),candidate=parseCoordinateList(input.candidateCoordinates);if(existing.length!==candidate.length)throw new RangeError('Existing and candidate coordinate counts must match.');
 const tolerance=finite('Per-hole tolerance',input.toleranceMm,{allowZero:true}),existingLength=finite('Existing cavity length',input.existingLengthMm),existingWidth=finite('Existing cavity width',input.existingWidthMm),existingDepth=finite('Existing cavity depth',input.existingDepthMm),candidateLength=finite('Candidate harness length',input.candidateLengthMm),candidateWidth=finite('Candidate harness width',input.candidateWidthMm),candidateDepth=finite('Candidate harness depth',input.candidateDepthMm),allowance=finite('Wire allowance',input.wireAllowanceMm,{allowZero:true});
 const centroid=points=>points.reduce((sum,point)=>({x:sum.x+point.x/points.length,y:sum.y+point.y/points.length}),{x:0,y:0}),a=centroid(existing),b=centroid(candidate),translation={x:a.x-b.x,y:a.y-b.y};
 const rows=existing.map((point,index)=>{const moved={x:candidate[index].x+translation.x,y:candidate[index].y+translation.y},dx=moved.x-point.x,dy=moved.y-point.y;return {hole:index+1,dxMm:dx,dyMm:dy,residualMm:Math.hypot(dx,dy)}}),maximumMismatchMm=Math.max(...rows.map(row=>row.residualMm)),rmsMismatchMm=Math.sqrt(rows.reduce((sum,row)=>sum+row.residualMm**2,0)/rows.length),lengthClearanceMm=existingLength-candidateLength-2*allowance,widthClearanceMm=existingWidth-candidateWidth-2*allowance,depthClearanceMm=existingDepth-candidateDepth-allowance;
 const coordinateMatch=maximumMismatchMm<=tolerance,envelopeMatch=[lengthClearanceMm,widthClearanceMm,depthClearanceMm].every(value=>value>=0);
 return {rows,translation,maximumMismatchMm,rmsMismatchMm,lengthClearanceMm,widthClearanceMm,depthClearanceMm,coordinateMatch,envelopeMatch,state:coordinateMatch&&envelopeMatch?'clear':'conflict'};
}
