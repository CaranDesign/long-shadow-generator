//only interface definition of parameters, that's why it has .d.ts extension
//typescript will not compile js for this file

export interface TextParams {
  text: string;
  size: number;
  color: string;
  background: string;

  setText: (text: string) => void;
  setSize: (size: number) => void;
  setColor: (color: string) => void;
  setTextBackground: (color: string) => void;
}