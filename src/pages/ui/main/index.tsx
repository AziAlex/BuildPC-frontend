import { MainStyled } from '@/pages/ui/main/style.ts'
import { CurrentItem } from '@/entities/entities-accessory'
import { MainItemsWrapper } from '@/feature/main-intem-wrapper'
import { AlternativeAccessories } from '@/widgets/alternative-accessories'

export const Main = () => (
  <MainStyled>
    <CurrentItem />
    <AlternativeAccessories />
    <MainItemsWrapper>
      <></>
    </MainItemsWrapper>
    <MainItemsWrapper>
      <></>
    </MainItemsWrapper>
  </MainStyled>
)
