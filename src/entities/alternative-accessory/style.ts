import styled from 'styled-components'
import { hexToRgba } from '@/shared/utils/hexToRgb.ts'

export const AlternativeAccessoryStyled = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 20px;
`

export const AlternativeAccessoriesItems = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & > li {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 10px 20px;
    border-top: 2px solid ${hexToRgba('--grayLight', 0.2)};
    border-bottom: 2px solid ${hexToRgba('--grayLight', 0.2)};
    transition: 0.2s background-color ease-in-out;
    cursor: pointer;

    &:hover {
      background-color: ${hexToRgba('--grayLight', 0.2)};
    }

    //h6 {
    //  flex-grow: 1;
    //  white-space: nowrap;
    //  overflow: hidden;
    //  text-overflow: ellipsis;
    //}

    & > div {
      display: flex;
      flex-direction: column;
      padding: 10px 0;
      gap: 10px;
    }

    & > img {
      max-height: 100px;
      max-width: 90px;
      object-fit: contain;
    }

    .marketplace-img {
      max-height: 18px;
      max-width: 90px;
      object-fit: contain;
    }

    .price {
      font-size: 16px;
      color: var(--grayDark);
      font-weight: 600;
    }
  }
`
