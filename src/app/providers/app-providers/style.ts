import styled from 'styled-components'

export const AppContainerStyled = styled.div`
  width: 100%;
  height: 100svh;
  position: relative;
  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.secondary};
`
