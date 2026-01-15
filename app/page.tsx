'use client'

import { useState } from "react";

import { ShadowTextSettings } from "@/components/ShadowTextSetting";
import { ShadowCodePreview } from "@/components/ShadowCodePreview";
import { TypographyP } from "@/components/commons/LsTypography";
import { ShadowControls } from "@/components/ShadowConfig";
import { ShadowPreview } from "@/components/ShadowPreview";
import { ShadowParams } from "@/types/shadow";
import { Card } from "@/components/ui/card";
import { TextParams } from "@/types/text";

export default function Home() {
  
  //different approach for setting all shadows params
  const [shadowParams, setParams] = useState<ShadowParams>({
    length: 60,
    angle: 45,
    blur: 1,
    intensity: 0.8,
    color:'#3d0000'
  });

  // spltted text params for different approach
  const [textBackground, setTextBackground] = useState<string>("#610000")
  const [textColor, setTextColor] = useState<string>("#ffffff");
  const [text, setText] = useState<string>("NETFLIX");
  const [size, setSize] = useState<number>(50);

  //handler for text params
  function handleTextColor(hex: string) {
    setTextColor(hex)
  }

  function handleSize(value: number) {
    setSize(value)
  }

  function handleBackground(hex: string) {
    setTextBackground(hex)
  }


  //Merging all params and setParams in one object to make it pass between components easly
  const textParams: TextParams = {
    setText,
    text,

    setSize: handleSize,
    size,
    
    setColor: handleTextColor,
    color: textColor,

    setTextBackground: handleBackground,
    background: textBackground,
  };
  
  return (
    <section className="w-full flex justify-center">
      <div className="p-5 lg:p-10 grid grid-cols-2 gap-4 w-6xl justify-center flex">
        
        {/* Text Preview */}
        <div className="col-span-2">
          <Card className="flex justify-center items-center overflow-hidden min-h-60 " style={{backgroundColor:textBackground}}>    
            <ShadowPreview
              shadowParams={shadowParams}
              textParams={textParams}
            >
              {text}
            </ShadowPreview>
          </Card>
        </div>
  
        {/* Text Content Configs */}
        <div className="col-span-2 sm:col-span-1">
          <Card className="h-full">
            <div className="p-5 flex justif-center w-full">
              <ShadowTextSettings textParams={textParams}/>
            </div>
          </Card>
        </div>
  
        {/* Shadow Configs */}
        <div className="col-span-2 sm:col-span-1">
            <Card>
              <div className="p-5 flex justif-center w-full">
                <ShadowControls params={shadowParams} setParams={setParams} />
              </div>
            </Card>
        </div>
  
        {/* Generated Code */}
        <div className="col-span-2 mt-2">
          <TypographyP>Output Code</TypographyP>
          <Card className="mt-5 py-0 overflow-hidden">
            <ShadowCodePreview params={shadowParams} />
          </Card>
        </div>
  
      </div>
    </section>
  );
}

