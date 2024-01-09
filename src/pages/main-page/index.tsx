import { NavAccessories } from '@/widgets/nav-accessories'
import { Main } from '@/widgets/main'

import { MainPageWrapper } from '@/pages/main-page/style.ts'

export const MainPage = () => (
  <MainPageWrapper>
    <NavAccessories />
    <Main />
  </MainPageWrapper>
)
