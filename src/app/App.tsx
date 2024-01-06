import { MainPage } from '@/pages/main-page'
import { AppProviders } from './providers/AppProviders.tsx'
import GlobalStyles from '@/app/styles/global.ts'
import styled from 'styled-components'

export const AppWrapper = styled.div`
  width: 100%;
  height: 100svh;
  position: relative;
  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.text};
`

function App() {
  return (
    <AppProviders>
      <GlobalStyles />
      <AppWrapper>
        <MainPage />
      </AppWrapper>
      <MainPage />
    </AppProviders>
  )
}

export default App
