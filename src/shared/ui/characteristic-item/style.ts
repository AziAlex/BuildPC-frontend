import styled from 'styled-components'
import { pxToRem } from '@/shared/utils'

export const CharacteristicItemStyled = styled.li<{ $primary: boolean }>`
  display: flex;
  width: ${(props) => (props.$primary ? '350px' : '100%')};

  p {
    font-size: ${(props) => (props.$primary ? pxToRem(16) : pxToRem(14))};
    color: ${(props) => props.$primary && 'var(--grayDark)'};
    font-weight: 600;
  }

  p:last-child {
    max-width: 100%;
    min-width: 100px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  span {
    flex-grow: 1;
    border-bottom: 2px solid var(--grayLightSecond);
    opacity: 0.2;
    margin: 3px 10px;
  }

  & > img {
    height: 22px;
    min-width: 100px;
    object-position: left;
    object-fit: contain;
  }
`
