import styled from 'styled-components'

export const ButtonStyled = styled.button<{ $small: boolean }>`
  padding: ${(props) => (props.$small ? '12px' : '12px 30px')};
  border: 1px solid var(--grayLightSecond);
  border-radius: 10px;
  transition: background-color 0.2s ease-in;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 1px;
  color: var(--grayDark);

  &:hover {
    background-color: var(--grayLight);
  }
`
