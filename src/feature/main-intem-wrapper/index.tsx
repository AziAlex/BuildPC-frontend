import { ContainerBoxStyled } from '@/feature/main-intem-wrapper/style.ts'
import { FC } from 'react'

interface Props {
  children: React.ReactNode
  isScroll?: boolean
}

export const MainItemsWrapper: FC<Props> = ({ children, isScroll }) => (
  <ContainerBoxStyled $isScroll={isScroll}>{children}</ContainerBoxStyled>
)
