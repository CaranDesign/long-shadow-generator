import React from 'react'
import { FilePenLine } from 'lucide-react';

import { SettingsTitle } from './commons/SettingsTitle';
import { TypographyP } from './commons/LsTypography';
import InputLabel from './commons/InputLabel';
import { LsSlider } from './commons/LsSlider';
import { TextParams } from '@/types/text';
import { Input } from './ui/input';
import { LsColorPicker } from './commons/LsColorPicker';

interface ShadowTextSettingsProps {
  textParams: TextParams;
}


export const ShadowTextSettings: React.FC<ShadowTextSettingsProps> = ({textParams}) =>  {
  return (
     <div className='w-full'>
        
         <SettingsTitle
            icon={<FilePenLine />}
            title="Change Text"
         />

        <InputLabel label='Content'/>
        <Input
           onChange={(e)=>textParams.setText(e.target.value)}
           className='w-full mt-1 mb-5'
           type='text'
           value={textParams.text}
        />

        <LsSlider
            paramKey={'size'}
            label='Text Size'
            value={[textParams.size]}
            min={1}
            max={200}
            step={1}
            onValueChange={(value) => textParams.setSize(value[0])}
        />

       <div className='flex flex-wrap gap-4'>
         <div>
            <InputLabel label='Text Color'/>
            <LsColorPicker
               id="color"
               type="color"
               className="h-10 p-1"
               color={textParams.color}
               value={textParams.color}
               onChange={(e) => textParams.setColor(e.target.value)}
            />
         </div>
         <div>
            <InputLabel label='Text Background'/>
            <LsColorPicker
               id="color"
               type="color"
               className="h-10 p-1"
               color={textParams.background}
               value={textParams.background}
               onChange={(e) => textParams.setTextBackground(e.target.value)}
            />
         </div>
       </div>
     </div>
  )
}
