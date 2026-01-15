import React from 'react'
import { TypographyH4 } from './LsTypography'

interface SettingsTitleProps {
   icon: React.ReactNode,
   title: string
}

export const SettingsTitle: React.FC<SettingsTitleProps> = ({
   icon,
   title
}) => {
  return (
     <div className='flex text-sky-600 gap-2 items-center'>
        {icon}
        <span className='text-white'><TypographyH4>{title}</TypographyH4></span>
     </div>
  )
}
