import { ThemeProvider as Provider } from 'styled-components'
import { FC, PropsWithChildren } from 'react'
import { useAppSelector } from '@/app/redux/hooks.ts'

export const ThemeProvider: FC<PropsWithChildren> = ({children}) => {
  const { theme  } = useAppSelector((state) => state.ui)

  return (
    <Provider theme={theme}>
      {children}
    </Provider>
  )
}