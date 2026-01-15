import React from 'react'
import { TypographyP } from './LsTypography'

interface InputLabelProps {
   label: string
}

export default function InputLabel({label}:InputLabelProps) {
  return (
     <div className='text-white/50 mt-5'><TypographyP>{label}</TypographyP></div>
  )
}
