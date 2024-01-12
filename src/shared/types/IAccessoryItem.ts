import { Marketplaces } from '@/shared/types/Marketplaces.ts'

export interface IAccessoryItem {
  _id: string
  type: string
  marketplace: Marketplaces
  name: string
  price: number
  href: string
  characteristics: string[]
  img: string
}
