import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function hexToRgb(hex: string): string {
  
  // removing # and alpha characters 
  let cleanedHex = hex.slice(0, 7).replace(/^#/, "");
  
  // defining short RGB format
  if (cleanedHex.length === 3) {
    cleanedHex = cleanedHex
      .split("")
      .map((c) => c + c)
      .join("");
  }

  if (cleanedHex.length !== 6) {
    throw new Error(`Colore HEX non valido: ${hex}`);
  }

  const r = parseInt(cleanedHex.slice(0, 2), 16);
  const g = parseInt(cleanedHex.slice(2, 4), 16);
  const b = parseInt(cleanedHex.slice(4, 6), 16);

  return `${r},${g},${b}`;
}
