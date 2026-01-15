import { ShadowParams } from '@/types/shadow';
import React from 'react';
import { LsSlider } from './commons/LsSlider';
import { FilePenLine, Settings } from 'lucide-react';
import { SettingsTitle } from './commons/SettingsTitle';
import { LsColorPicker } from './commons/LsColorPicker';
import InputLabel from './commons/InputLabel';

interface ShadowControlsProps {
  params: ShadowParams;
  setParams: (params: ShadowParams) => void;
}

export const ShadowControls: React.FC<ShadowControlsProps> = ({ params, setParams }) => {
  return (
    <div className="flex flex-col gap-6 w-full">
      
      <SettingsTitle
        icon={<Settings/>}
        title="Edit Shadow"
      />

      {/* length  */}
      <div>
        <LsSlider
          label='Length'
          paramKey='length'
          value={[params.length]}
          min={1}
          max={200}
          step={1}
          onValueChange={(value) =>
            setParams({ ...params, length: Number(value[0]) })
          }
        />
      </div>

      {/* angle */}
      <div>
        <LsSlider
          label='Angle'
          paramKey='angle'
          value={[params.angle]}
          min={0}
          max={360}
          step={1}
          onValueChange={(value) =>
            setParams({ ...params, angle: Number(value[0]) })
          }
        />
      </div>

      {/* blur */}
      <div>
        <LsSlider
          label='Blur'
          paramKey='blur'
          value={[params.blur]}
          min={0}
          max={10}
          step={0.1}
          onValueChange={(value) =>
            setParams({ ...params, blur: Number(value[0]) })
          }
        />
      </div>

      {/* intensity */}
      <div>
        <LsSlider
          label='Intensity'
          paramKey='intensity'
          value={[params.intensity]}
          min={0}
          max={1}
          step={0.01}
          onValueChange={(value) =>
            setParams({ ...params, intensity: Number(value[0]) })
          }
        />
      </div>


      {/* shadow color */}
      <div>
        <InputLabel label='Color'/>
        <LsColorPicker
          id="shadow-color"
          type="color"
          className="h-10 p-1"
          color={params.color}
          value={params.color}
          onChange={(e) => setParams({ ...params, color: e.target.value })}
        />
      </div>
    </div>
  );
};
