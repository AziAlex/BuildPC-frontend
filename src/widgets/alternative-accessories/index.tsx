import { AlternativeAccessoriesStyled } from '@/widgets/alternative-accessories/style.ts'
import { MainItemsWrapper } from '@/feature/main-intem-wrapper'
import { AlternativeAccessoriesItems } from '@/entities/alternative-accessory/style.ts'
import { currentAccessory } from '@/shared/data/currentAccessory.ts'
import { removeAfterComma } from '@/shared/utils/removeAfterComma.ts'
import { marketplaces } from '@/shared/ui/characteristic-item/lib/constans.ts'
import { numberToPrice } from '@/shared/utils/numberToPrice.ts'

export const AlternativeAccessories = () => (
  <MainItemsWrapper>
    <AlternativeAccessoriesStyled>
      <h5>Альтернативы</h5>

      <AlternativeAccessoriesItems>
        {[...Array(5)].map(() => (
          <li key={Math.random()}>
            <img src={currentAccessory.img} alt={currentAccessory.name} />
            <div>
              <h6>{removeAfterComma(currentAccessory.name)}</h6>
              <img
                className="marketplace-img"
                src={marketplaces[currentAccessory.marketplace]}
                alt={currentAccessory.marketplace}
              />
              <p className="price">{numberToPrice(currentAccessory.price)}</p>
            </div>
          </li>
        ))}
      </AlternativeAccessoriesItems>
    </AlternativeAccessoriesStyled>
  </MainItemsWrapper>
)
