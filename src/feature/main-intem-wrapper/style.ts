import styled from 'styled-components'

export const MainItemsWrapperStyled = styled.div<{ $isScroll: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.06);
  overflow: hidden;

  & > div {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: 40px;

    &:after {
      display: ${(props) => props.$isScroll && 'none'};
      pointer-events: none;
      z-index: 10;
      content: '';
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      position: absolute;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0) 73.67%, #ffffff 106.57%);
    }
  }
`
