import type { ShadowParams } from "../types/shadow";
import { hexToRgb } from "./utils";

export function generateLongShadow({
  length = 60,
  angle = 45,
  blur = 0,
  intensity = 0.8,
  color = '#000000'
}: ShadowParams): string {
  const rad = (angle * Math.PI) / 180;
  const shadows: string[] = [];

  for (let i = 1; i <= length; i++) {
    const x = Math.round(Math.cos(rad) * i);
    const y = Math.round(Math.sin(rad) * i);
    const alpha = intensity * (1 - i / length);

    shadows.push(`${x}px ${y}px ${blur}px rgba(${hexToRgb(color)},${alpha})`);
  }

  return shadows.join(', ');
}
