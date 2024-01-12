import { MainItemsWrapperStyled } from '@/feature/main-intem-wrapper/style.ts'
import { FC, PropsWithChildren, useEffect, useRef, useState } from 'react'

export const MainItemsWrapper: FC<PropsWithChildren> = ({ children }) => {
  const [isScroll, setIsScroll] = useState(false)
  const wrapper = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = wrapper.current
    if (!element) return

    if (element.scrollHeight > element.clientHeight) {
      setIsScroll(true)
    }
  }, [])

  return (
    <MainItemsWrapperStyled $isScroll={isScroll} ref={wrapper}>
      {children}
    </MainItemsWrapperStyled>
  )
}
