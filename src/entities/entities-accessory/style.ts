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

  img {
    width: 210px;
    max-height: 230px;
    object-fit: cover;
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

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px 70px;
  }
`
