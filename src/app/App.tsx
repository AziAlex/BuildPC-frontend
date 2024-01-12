import { MainPage } from '@/pages/main-page'
import { AppProviders } from './providers/AppProviders.tsx'
import GlobalStyles from '@/app/styles/global.ts'
import styled from 'styled-components'

export const AppWrapper = styled.div`
  width: 100%;
  height: 100svh;
  position: relative;
  color: ${({ theme }) => theme.colors.text};
  background: url('/background.png') center center / cover no-repeat;
  padding: 40px 40px 40px 0;
`

function App() {
  return (
    <AppProviders>
      <GlobalStyles />
      <AppWrapper>
        <MainPage />
      </AppWrapper>
    </AppProviders>
  )
}

export default App
