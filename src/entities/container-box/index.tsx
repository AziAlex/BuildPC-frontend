import { ContainerBoxStyled } from '@/entities/container-box/style.ts'

type Props = {
  children: React.ReactNode
}

export const ContainerBox = (props: Props) => (
  <ContainerBoxStyled>{props.children}</ContainerBoxStyled>
)
