import styled from 'styled-components'
import '@/app/styles/variables.css'
import { pxToRem } from '@/shared/utils'

export const NavAccessoriesWrapperLayout = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`
export const NavAccessoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 368px;
  background-color: var(--black);
  opacity: 0.9;
  border-radius: 0 20px 20px 0;
`

export const ContentBox = styled.div`
  height: 100%;
  max-height: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${pxToRem(10)};

  & > svg {
    width: 28px;
    height: auto;
  }

  & > span {
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%; /* 30px */
    text-transform: lowercase;
  }
`

export const CategotiesList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  &:last-child {
  }
`
