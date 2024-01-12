import { MainStyled } from '@/widgets/main/style.ts'
import { CurrentItem } from '@/entities/entities-accessory'
import { MainItemsWrapper } from '@/feature/main-intem-wrapper'

export const Main = () => (
  <MainStyled>
    <CurrentItem />
    <MainItemsWrapper>
      <></>
    </MainItemsWrapper>
    <MainItemsWrapper>
      <></>
    </MainItemsWrapper>
    <MainItemsWrapper>
      <></>
    </MainItemsWrapper>
  </MainStyled>
)
