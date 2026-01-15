//only interface definition of parameters, that's why it has .d.ts extension
//typescript will not compile js for this file

export interface ShadowParams {
  length: number;
  angle: number;
  blur: number;
  intensity: number;
  color:string
}

