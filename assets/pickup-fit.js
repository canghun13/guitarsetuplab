const finite=(value,name)=>{const number=Number(value);if(!Number.isFinite(number))throw new RangeError(`${name} must be a finite number.`);return number};
const positive=(value,name)=>{const number=finite(value,name);if(number<=0)throw new RangeError(`${name} must be greater than zero.`);return number};
const nonnegative=(value,name)=>{const number=finite(value,name);if(number<0)throw new RangeError(`${name} cannot be negative.`);return number};

export function projectStringSpread({nutSpreadMm,bridgeSpreadMm,scaleMm,positionMm}){
  const nut=positive(nutSpreadMm,'Nut spread'),bridge=positive(bridgeSpreadMm,'Bridge spread'),scale=positive(scaleMm,'Scale length'),position=nonnegative(positionMm,'Pickup position');
  if(position>scale)throw new RangeError('Pickup position must fall between the nut and bridge witness points.');
  return {spreadMm:nut+(bridge-nut)*(position/scale),ratio:position/scale};
}

export function comparePoleSpacing({stringSpreadMm,poleSpreadMm,toleranceMm}){
  const strings=positive(stringSpreadMm,'String spread'),poles=positive(poleSpreadMm,'Pole spread'),tolerance=nonnegative(toleranceMm,'Tolerance');
  const differenceMm=poles-strings,mismatchMm=Math.abs(differenceMm),perSideMismatchMm=mismatchMm/2;
  return {differenceMm,mismatchMm,perSideMismatchMm,withinTolerance:perSideMismatchMm<=tolerance};
}

export function checkRouteClearance({cavityLengthMm,cavityWidthMm,cavityDepthMm,pickupLengthMm,pickupWidthMm,pickupDepthMm,allowanceMm}){
  const cavity={length:positive(cavityLengthMm,'Cavity length'),width:positive(cavityWidthMm,'Cavity width'),depth:positive(cavityDepthMm,'Cavity depth')};
  const pickup={length:positive(pickupLengthMm,'Pickup length'),width:positive(pickupWidthMm,'Pickup width'),depth:positive(pickupDepthMm,'Pickup depth')};
  const allowance=nonnegative(allowanceMm,'Desired allowance');
  const clearances={length:(cavity.length-pickup.length)/2,width:(cavity.width-pickup.width)/2,depth:cavity.depth-pickup.depth};
  return {clearances,clearsRectangle:Object.values(clearances).every(value=>value>=allowance),minimumClearanceMm:Math.min(...Object.values(clearances))};
}

export function checkRingMountFit({pickupLengthMm,pickupWidthMm,openingLengthMm,openingWidthMm,existingScrewXmm,existingScrewYmm,candidateScrewXmm,candidateScrewYmm,screwToleranceMm}){
  const pickup={length:positive(pickupLengthMm,'Pickup length'),width:positive(pickupWidthMm,'Pickup width')};
  const opening={length:positive(openingLengthMm,'Ring opening length'),width:positive(openingWidthMm,'Ring opening width')};
  const screw={existingX:positive(existingScrewXmm,'Existing horizontal screw span'),existingY:positive(existingScrewYmm,'Existing vertical screw span'),candidateX:positive(candidateScrewXmm,'Candidate horizontal screw span'),candidateY:positive(candidateScrewYmm,'Candidate vertical screw span')};
  const tolerance=nonnegative(screwToleranceMm,'Screw-span tolerance');
  const openingClearance={length:(opening.length-pickup.length)/2,width:(opening.width-pickup.width)/2};
  const screwDifference={x:screw.candidateX-screw.existingX,y:screw.candidateY-screw.existingY};
  return {openingClearance,screwDifference,openingClears:Object.values(openingClearance).every(value=>value>=0),screwsAlign:Object.values(screwDifference).every(value=>Math.abs(value)<=tolerance)};
}
