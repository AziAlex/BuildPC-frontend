import styled from 'styled-components'
import { pxToRem } from '@/shared/utils'

export const CharacteristicItemStyled = styled.div<{ $primary: boolean }>`
  display: flex;
  width: ${(props) => (props.$primary ? '350px' : '100%')};

  p {
    font-size: ${(props) => (props.$primary ? pxToRem(16) : pxToRem(14))};
    color: ${(props) => props.$primary && 'var(--grayDark)'};
    font-weight: 600;
  }

  p:last-child {
    width: auto;
    max-width: 100%;
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

  img {
    height: 22px;
    object-position: left;
  }
`
