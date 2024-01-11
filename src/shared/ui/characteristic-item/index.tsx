import { FC } from 'react'
import { CharacteristicItemStyled } from '@/shared/ui/characteristic-item/style.ts'
import { marketplaces } from '@/shared/ui/characteristic-item/lib/constans.ts'

interface Props {
  title: string
  primary?: boolean
  marketplace?: string
  characteristic?: string
}

export const CharacteristicItem: FC<Props> = ({
  primary = false,
  ...props
}) => (
  <CharacteristicItemStyled $primary={primary}>
    <p>{props.title}</p>
    <span></span>
    {props.marketplace ? (
      <img src={marketplaces[props.marketplace]} alt={'store'} />
    ) : (
      <p>{props.characteristic}</p>
    )}
  </CharacteristicItemStyled>
)
