import styled from 'styled-components'
import '@/app/styles/variables.css'
import { clamp, pxToRem } from '@/shared/utils'

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
  width: ${clamp(300, 368)};
  background-color: var(--black);
  opacity: 0.9;
  border-radius: 0 20px 20px 0;
`

export const ContentBox = styled.div`
  height: 100%;
  width: 100%;
  max-height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${pxToRem(10)};
  color: var(--white);
  padding-bottom: 30px;

  & > svg {
    width: 28px;
    height: auto;
  }

  & > span {
    font-size: ${pxToRem(24)};
    font-style: normal;
    font-weight: 600;
    line-height: 125%; /* 30px */
    text-transform: lowercase;
  }
`

export const AccessoriesCategoriesList = styled.ul`
  width: 100%;
  overflow-y: auto;
`
