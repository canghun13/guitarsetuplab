import {requireFinite} from './core.js';
export function fretPositions(scaleMm,fretCount){const scale=requireFinite(scaleMm,'Scale length',{min:200,max:1200}),count=requireFinite(fretCount,'Fret count',{min:1,max:36,integer:true});let previous=0;return Array.from({length:count},(_,i)=>{const fret=i+1,positionMm=scale*(1-2**(-fret/12)),spacingMm=positionMm-previous,remainingMm=scale-positionMm;previous=positionMm;return {fret,positionMm,spacingMm,remainingMm,fraction:positionMm/scale}})}
export const fretFraction=fret=>1-2**(-requireFinite(fret,'Fret number',{min:0,max:60})/12);
