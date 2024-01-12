import styled from 'styled-components'

export const CurrentItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const CurrentItemInfo = styled.div`
  display: flex;
  gap: 40px;

  & > img {
    max-width: 210px;
    max-height: 200px;
    object-fit: contain;
  }
`

export const CurrentItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  flex-grow: 1;

  .items {
    display: contents;
  }
`

export const CurrentItemDescriptionButtons = styled.div`
  display: flex;
  gap: 12px;
`

export const CurrentItemCharacteristics = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  > ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px 70px;
  }
`
