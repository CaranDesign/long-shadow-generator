'use client'

import React, { useEffect, useRef } from 'react';
import { generateLongShadow } from '@/lib/shadow';
import { ShadowParams } from '@/types/shadow';
import { TextParams } from '@/types/text';

interface ShadowPreviewProps {
  children: React.ReactNode;
  textParams: TextParams;
  shadowParams: ShadowParams;
}

export const ShadowPreview: React.FC<ShadowPreviewProps> = ({ children, shadowParams, textParams }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.textShadow = generateLongShadow(shadowParams);
    }
  }, [shadowParams, textParams]);

  return (
    <div
      className='font-bold text-center'
      ref={ref}
      style={{
        fontSize: textParams.size,
        color:textParams.color,
        userSelect: 'none',
      }}
    >
      {children}
    </div>
  );
};
