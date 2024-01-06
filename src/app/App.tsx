import { MainPage } from "@/pages/main-page"
import { AppProviders } from './providers/app-providers'

function App() {
  return (
    <AppProviders>
      <MainPage />
    </AppProviders>
  )
}

export default App