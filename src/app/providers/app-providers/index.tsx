import { FC, PropsWithChildren } from 'react'
import { Provider } from 'react-redux'

import { ThemeProvider } from '@/app/providers/ThemeProvider.tsx'
import { AppContainerStyled } from './style.ts'
import GlobalStyles from '@/app/styles/global.ts'

import { store } from '@/app/redux'

export const AppProviders: FC<PropsWithChildren> = ({children}) => (
  <Provider store={store}>
    <ThemeProvider>
      <GlobalStyles />

      <AppContainerStyled>
        {children}
      </AppContainerStyled>
    </ThemeProvider>
  </Provider>
)

