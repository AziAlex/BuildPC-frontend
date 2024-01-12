import { MainItemsWrapperStyled } from '@/feature/main-intem-wrapper/style.ts'
import { FC, PropsWithChildren } from 'react'
import { useWrapperIsScrolled } from '@/shared/hooks/useWrapperIsScrolled.ts'

export const MainItemsWrapper: FC<PropsWithChildren> = ({ children }) => {
  const { ref, isScroll } = useWrapperIsScrolled<HTMLDivElement>()

  return (
    <MainItemsWrapperStyled $isScroll={!isScroll}>
      <div ref={ref}>{children}</div>
    </MainItemsWrapperStyled>
  )
}
