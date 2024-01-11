import { useRef } from 'react'

import { MainItemsWrapper } from '@/feature/main-intem-wrapper'
import { removeAfterComma } from '@/shared/utils/removeAfterComma.ts'
import { CharacteristicItem } from '@/shared/ui/characteristic-item'
import { numberToPrice } from '@/shared/utils/numberToPrice.ts'
import { Button } from '@/shared/ui/button'
import { getFirstWord } from '@/shared/utils/getFirstWord.ts'
import { getExceptFirstWord } from '@/shared/utils/getExceptFirstWord.ts'
import useChangeWidthCharacteristicItem from '@/shared/hooks/useChangeWidthCharacteristicItem.ts'

import { currentAccessory as item } from '@/shared/data/currentAccessory.ts'
import {
  CurrentItemCharacteristics,
  CurrentItemDescription,
  CurrentItemDescriptionButtons,
  CurrentItemInfo,
  CurrentItemWrapper,
} from './style.ts'

export const CurrentItem = () => {
  const characteristicItemsPrimary = useRef<HTMLDivElement>(null)
  const characteristicItems = useRef<HTMLDivElement>(null)
  useChangeWidthCharacteristicItem(characteristicItems)
  useChangeWidthCharacteristicItem(characteristicItemsPrimary)

  return (
    <MainItemsWrapper>
      <CurrentItemWrapper>
        <CurrentItemInfo>
          <img src={item.img} alt={item.name} />
          <CurrentItemDescription>
            <h2>{removeAfterComma(item.name)}</h2>
            <div className="items" ref={characteristicItemsPrimary}>
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
            </div>
            <CurrentItemDescriptionButtons>
              <Button value="Перейти в магазин" />
              <Button icon="balance" />
              <Button icon="plus" />
            </CurrentItemDescriptionButtons>
          </CurrentItemDescription>
        </CurrentItemInfo>
        <CurrentItemCharacteristics>
          <h5>Характеристики</h5>
          <div ref={characteristicItems}>
            {item.characteristics.map((characteristic, index) => (
              <CharacteristicItem
                key={index}
                title={getFirstWord(characteristic)}
                characteristic={getExceptFirstWord(characteristic)}
              />
            ))}
          </div>
        </CurrentItemCharacteristics>
      </CurrentItemWrapper>
    </MainItemsWrapper>
  )
}
