import { ContainerBoxStyled } from '@/feature/container-box/style.ts'
import { FC } from 'react'

interface Props {
  children: React.ReactNode
}

export const MainItemsWrapper: FC<Props> = ({ children }) => (
  <ContainerBoxStyled>{children}</ContainerBoxStyled>
)
