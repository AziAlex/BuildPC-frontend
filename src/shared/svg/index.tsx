import { IconName } from '@/shared/types/iconName.ts'
import React, { FC } from 'react'
import { IconLogo } from './exports.ts'
import { IconBody } from '@/shared/svg/ui/accessories/IconBody.tsx'
import { IconCoolingSystem } from '@/shared/svg/ui/accessories/IconCoolingSystem.tsx'
import { IconMemory } from '@/shared/svg/ui/accessories/IconMemory.tsx'
import { IconMotherboard } from '@/shared/svg/ui/accessories/IconMotherboard.tsx'
import { IconPowerSupply } from '@/shared/svg/ui/accessories/IconPowerSupply.tsx'
import { IconProcessor } from '@/shared/svg/ui/accessories/IconProcessor.tsx'
import { IconVideoCard } from '@/shared/svg/ui/accessories/IconVideoCard.tsx'
import { IconBalance } from '@/shared/svg/ui/icons/IconBalance.tsx'
import { IconPlus } from '@/shared/svg/ui/icons/IconPlus.tsx'

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
