import { FC, PropsWithChildren } from 'react'
import { Provider } from 'react-redux'

import { ThemeProvider } from '@/app/providers/ThemeProvider.tsx'

import { store } from '@/app/redux'

export const AppProviders: FC<PropsWithChildren> = ({ children }) => (
  <Provider store={store}>
    <ThemeProvider>{children}</ThemeProvider>
  </Provider>
)
