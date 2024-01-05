import { IconName } from '../types/iconName.ts'
import React, { FC } from 'react'
import { IconLogo } from './exports.ts'

interface Props {
  name: IconName
  className: string
}

export const Icon: FC<Props> = ({ name, className }) => {
  const icons: { [key in IconName]:React.ReactNode } = {
    logo: <IconLogo className={className} />,
  }

  return icons[name]
}