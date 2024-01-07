import styled from 'styled-components'
import { clamp } from '@/shared/utils'

export const AccessoryCategoryItemStyled = styled.li`
  position: relative;
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr 6fr;
  gap: ${clamp(10, 30)};

  border-top: 1px solid var(--grayDark);
  padding: 25px 0 25px ${clamp(40, 70)};
  transition: border 0.3s ease-out;
  border-left: 0 solid transparent;
  width: 100%;

  &:last-child {
    border-bottom: 1px solid var(--grayDark);
  }

  h4 {
    font-size: 20px;
    color: var(--grayLight);
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
  }

  svg {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 40px;
    max-height: 50px;
  }

  &:hover {
    border-left: 10px solid var(--grayLight);

    h4 {
      transition: color 0.3s ease-out;
      color: var(--white);
    }

    p {
      transition: color 0.3s ease-out;
      color: var(--grayLight);
    }

    svg path {
      transition: all 0.3s ease-out;
      stroke: var(--white);
    }
  }
`
