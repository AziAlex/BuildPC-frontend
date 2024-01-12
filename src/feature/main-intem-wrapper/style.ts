import styled from 'styled-components'

export const MainItemsWrapperStyled = styled.div<{ $isScroll: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.06);
  padding: 40px;

  &::-webkit-scrollbar-track {
    margin: 20px 0;
  }

  //&:after {
  //  pointer-events: none;
  //  position: fixed;
  //  content: '';
  //  left: 0;
  //  bottom: 0;
  //  height: 100%;
  //  width: 100%;
  //  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 73.67%, #fff 106.57%);
  //}
`
