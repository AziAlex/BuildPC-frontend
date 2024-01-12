import { IconName } from '@/shared/types/iconName.ts'
import React, { FC } from 'react'
import {
  IconBalance,
  IconBody,
  IconCoolingSystem,
  IconLogo,
  IconMemory,
  IconMotherboard,
  IconPlus,
  IconPowerSupply,
  IconProcessor,
  IconVideoCard,
} from './exports.ts'

interface Props {
  name: IconName
}

export const Icon: FC<Props> = ({ name }) => {
  const icons: { [key in IconName]: React.ReactNode } = {
    logo: <IconLogo />,
    body: <IconBody />,
    coolingSystem: <IconCoolingSystem />,
    memory: <IconMemory />,
    motherboard: <IconMotherboard />,
    powerSupply: <IconPowerSupply />,
    processor: <IconProcessor />,
    videoCard: <IconVideoCard />,
    balance: <IconBalance />,
    plus: <IconPlus />,
  }

  return icons[name]
}
