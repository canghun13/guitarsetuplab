const finite=(value,name)=>{const number=Number(value);if(!Number.isFinite(number))throw new RangeError(`${name} must be a finite number.`);return number};
const positive=(value,name)=>{const number=finite(value,name);if(number<=0)throw new RangeError(`${name} must be greater than zero.`);return number};
const nonnegative=(value,name)=>{const number=finite(value,name);if(number<0)throw new RangeError(`${name} must not be negative.`);return number};

export function checkDiLoading({sourceOhms,diInputKOhms,parallelInputKOhms=null,minimumRatio}){
  const source=positive(sourceOhms,'Source impedance'),di=positive(diInputKOhms,'DI input impedance')*1000,minimum=positive(minimumRatio,'Minimum load ratio');
  const hasParallel=parallelInputKOhms!==null&&parallelInputKOhms!==undefined&&parallelInputKOhms!=='';
  const parallel=hasParallel?positive(parallelInputKOhms,'Parallel input impedance')*1000:null;
  const load=parallel===null?di:1/(1/di+1/parallel),ratio=load/source,retained=load/(load+source),lossDb=20*Math.log10(retained);
  return {sourceOhms:source,diInputOhms:di,parallelInputOhms:parallel,equivalentLoadOhms:load,loadRatio:ratio,retainedVoltage:retained,lossDb,meetsEnteredRatio:ratio>=minimum,minimumRatio:minimum};
}

export function planReampLevel({referenceDbfs,returnedDbfs,currentTrimDb,toleranceDb}){
  const reference=finite(referenceDbfs,'Reference reading'),returned=finite(returnedDbfs,'Returned reading'),trim=finite(currentTrimDb,'Current trim'),tolerance=nonnegative(toleranceDb,'Tolerance');
  if(reference>0||returned>0)throw new RangeError('dBFS readings must not exceed 0 dBFS.');
  const deltaDb=reference-returned,proposedTrimDb=trim+deltaDb;
  return {referenceDbfs:reference,returnedDbfs:returned,currentTrimDb:trim,toleranceDb:tolerance,deltaDb,proposedTrimDb,withinTolerance:Math.abs(deltaDb)<=tolerance,direction:deltaDb>tolerance?'raise':deltaDb<-tolerance?'lower':'hold'};
}

export function levelToVrms(value,unit){
  const level=finite(value,'Level');
  if(unit==='Vrms')return positive(level,'Vrms level');
  if(unit==='dBu')return .775*10**(level/20);
  if(unit==='dBV')return 10**(level/20);
  throw new RangeError('Level unit must be dBu, dBV, or Vrms.');
}

export function vrmsToDbu(value){return 20*Math.log10(positive(value,'Vrms level')/.775)}

export function checkPedalInsertHeadroom({sendNominal,sendUnit,peakAboveNominalDb,pedalMaxInput,pedalMaxInputUnit,pedalMaxOutput,pedalMaxOutputUnit,returnNominal,returnUnit,requiredInputHeadroomDb}){
  const sendVrms=levelToVrms(sendNominal,sendUnit),peak=nonnegative(peakAboveNominalDb,'Peak above nominal'),inputMaxVrms=levelToVrms(pedalMaxInput,pedalMaxInputUnit),outputMaxVrms=levelToVrms(pedalMaxOutput,pedalMaxOutputUnit),returnVrms=levelToVrms(returnNominal,returnUnit),required=nonnegative(requiredInputHeadroomDb,'Required input headroom');
  const sendNominalDbu=vrmsToDbu(sendVrms),sendPeakDbu=sendNominalDbu+peak,inputMaxDbu=vrmsToDbu(inputMaxVrms),outputMaxDbu=vrmsToDbu(outputMaxVrms),returnNominalDbu=vrmsToDbu(returnVrms),inputHeadroomDb=inputMaxDbu-sendPeakDbu,outputMarginDb=outputMaxDbu-returnNominalDbu;
  return {sendNominalDbu,sendPeakDbu,inputMaxDbu,outputMaxDbu,returnNominalDbu,inputHeadroomDb,outputMarginDb,requiredInputHeadroomDb:required,inputPass:inputHeadroomDb>=required};
}

export function calculateRoundTripAlignment({sampleRate,referenceSample,returnedSample,existingCompensationSamples}){
  const rate=positive(sampleRate,'Sample rate'),reference=nonnegative(referenceSample,'Reference sample'),returned=nonnegative(returnedSample,'Returned sample'),existing=nonnegative(existingCompensationSamples,'Existing compensation');
  if(returned<reference)throw new RangeError('Returned transient must not precede the reference transient.');
  const measuredSamples=returned-reference,remainingSamples=measuredSamples-existing;
  return {sampleRate:rate,referenceSample:reference,returnedSample:returned,existingCompensationSamples:existing,measuredSamples,measuredMs:measuredSamples/rate*1000,remainingSamples,remainingMs:remainingSamples/rate*1000,direction:remainingSamples>0?'advance-return':remainingSamples<0?'delay-return':'aligned'};
}

export function planDualMicAlignment({distanceUnit,mic1Distance,mic2Distance,temperatureC,sampleRate,frequencyHz}){
  if(!['cm','in'].includes(distanceUnit))throw new RangeError('Distance unit must be cm or in.');
  const scale=distanceUnit==='cm'?.01:.0254,d1=nonnegative(mic1Distance,'Microphone 1 distance')*scale,d2=nonnegative(mic2Distance,'Microphone 2 distance')*scale,temp=finite(temperatureC,'Air temperature'),rate=positive(sampleRate,'Sample rate'),frequency=positive(frequencyHz,'Frequency');
  if(temp < -50 || temp > 60)throw new RangeError('Air temperature must be between -50 and 60 °C.');
  const speed=331.3+.606*temp,signedDistanceM=d2-d1,signedDelaySeconds=signedDistanceM/speed,delaySeconds=Math.abs(signedDelaySeconds),sampleOffset=delaySeconds*rate,wavelengthM=speed/frequency,unwrappedPhaseDeg=signedDelaySeconds*frequency*360,normalizedPhaseDeg=((unwrappedPhaseDeg%360)+360)%360;
  return {distanceUnit,mic1Distance:Number(mic1Distance),mic2Distance:Number(mic2Distance),temperatureC:temp,sampleRate:rate,frequencyHz:frequency,speedMps:speed,signedDistanceM,signedDelaySeconds,delaySeconds,sampleOffset,wavelengthM,unwrappedPhaseDeg,normalizedPhaseDeg,farther:signedDistanceM>0?'microphone 2':signedDistanceM<0?'microphone 1':'neither',direction:signedDistanceM>0?'delay-mic-1':signedDistanceM<0?'delay-mic-2':'aligned'};
}
