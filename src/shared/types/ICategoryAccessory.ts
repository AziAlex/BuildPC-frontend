import { IconName } from '@/shared/types/iconName.ts'

export interface ICategoryAccessory {
  id: number
  svg: IconName
  title: string
  amount: number
}
