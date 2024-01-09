import { NavAccessories } from '@/widgets/nav-accessories'
import { ContainerBox } from '@/entities/container-box'
import styled from 'styled-components'

export const MainPageWrapper = styled.div`
  height: 100%;
  display: flex;
  gap: 40px;
`

export const GridContainersBoxes = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: repeat(2, 1fr);
  gap: 40px;
`

export const MainPage = () => (
  <MainPageWrapper>
    <NavAccessories />
    <GridContainersBoxes>
      {[...Array(4)].map(() => (
        <ContainerBox>
          <></>
        </ContainerBox>
      ))}
    </GridContainersBoxes>
  </MainPageWrapper>
)
