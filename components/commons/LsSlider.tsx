import React from 'react';
import {
  Slider,
} from '@/components/ui/slider';
import { ShadowParams } from '@/types/shadow';
import { SliderRange, SliderThumb, SliderTrack } from '@radix-ui/react-slider';
import { TextParams } from '@/types/text';

interface LsSliderProps {
  label: string;                    
  paramKey: keyof ShadowParams | keyof TextParams;     
  value: number[];                    
  onValueChange: (value: number[]) => void
  min?: number;
  max?: number;
  step?: number;
}

export const LsSlider: React.FC<LsSliderProps> = ({
   label,
   paramKey,   
   value,
   onValueChange,
   min = 0,
   max = 100,
   step = 1,
}) => {
  return (
    <div>
      <div className="block mb-3 text-sm font-medium text-white/40 flex w-full justify-between">
           <div>{label}</div>
           <div>{value}</div>
      </div>
      <Slider
        value={value}
        min={min}
        max={max}
        step={step}
        onValueChange={onValueChange}
      >
        <SliderTrack>
          <SliderRange />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </div>
  );
};
