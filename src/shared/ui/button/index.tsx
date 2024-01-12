import { ButtonStyled } from '@/shared/ui/button/style.ts'
import { FC } from 'react'
import { IconName } from '@/shared/types/iconName.ts'
import { Icon } from '@/shared/svg'

type Props =
  | {
      value: string
      icon?: never
    }
  | {
      value?: never
      icon: IconName
    }

export const Button: FC<Props> = (props) => (
  <ButtonStyled $small={!!props.icon}>
    {props.icon ? <Icon name={props.icon} /> : props.value}
  </ButtonStyled>
)
