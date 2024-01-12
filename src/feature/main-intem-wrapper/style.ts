import styled from 'styled-components'

export const ContainerBoxStyled = styled.div<{ $isScroll?: boolean }>`
  width: 100%;
  height: 100%;
  overflow-y: ${({ $isScroll }) => $isScroll && 'hidden'};
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.06);
  padding: 40px;
`
