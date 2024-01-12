import { MainItemsWrapper } from '@/feature/main-intem-wrapper'
import { removeAfterComma } from '@/shared/utils/removeAfterComma.ts'
import { CharacteristicItem } from '@/shared/ui/characteristic-item'
import { numberToPrice } from '@/shared/utils/numberToPrice.ts'
import { Button } from '@/shared/ui/button'
import { getFirstWord } from '@/shared/utils/getFirstWord.ts'
import { getExceptFirstWord } from '@/shared/utils/getExceptFirstWord.ts'
import { useChangeWidthCharacteristicItem } from '@/shared/hooks/useChangeWidthCharacteristicItem.ts'

import { currentAccessory as item } from '@/shared/data/currentAccessory.ts'
import {
  CurrentItemCharacteristics,
  CurrentItemDescription,
  CurrentItemDescriptionButtons,
  CurrentItemInfo,
  CurrentItemWrapper,
} from './style.ts'

export const CurrentItem = () => {
  const characteristicItemsPrimary = useChangeWidthCharacteristicItem<HTMLUListElement>()
  const characteristicItems = useChangeWidthCharacteristicItem<HTMLUListElement>()

  return (
    <MainItemsWrapper>
      <CurrentItemWrapper>
        <CurrentItemInfo>
          <img src={item.img} alt={item.name} />
          <CurrentItemDescription>
            <h2>{removeAfterComma(item.name)}</h2>
            <ul className="items" ref={characteristicItemsPrimary}>
              <CharacteristicItem
                title={'Продавец'}
                primary={true}
                marketplace={item.marketplace}
              />
              <CharacteristicItem
                title={'Цена'}
                primary={true}
                characteristic={numberToPrice(item.price)}
              />
            </ul>
            <CurrentItemDescriptionButtons>
              <Button value="Перейти в магазин" />
              <Button icon="balance" />
              <Button icon="plus" />
            </CurrentItemDescriptionButtons>
          </CurrentItemDescription>
        </CurrentItemInfo>
        <CurrentItemCharacteristics>
          <h5>Характеристики</h5>
          <ul ref={characteristicItems}>
            {item.characteristics.map((characteristic, index) => (
              <CharacteristicItem
                key={index}
                title={getFirstWord(characteristic)}
                characteristic={getExceptFirstWord(characteristic)}
              />
            ))}
          </ul>
        </CurrentItemCharacteristics>
      </CurrentItemWrapper>
    </MainItemsWrapper>
  )
}
