import { Icon } from '@/shared/svg'
import { ICategoryAccessory } from '@/shared/types/ICategoryAccessory.ts'
import { AccessoryCategoryItemStyled } from '@/entities/accessory-category-item/style.ts'

type Props = {
  category: ICategoryAccessory
}

export const AccessoryCategoryItem = ({ category }: Props) => (
  <AccessoryCategoryItemStyled>
    <Icon name={category.svg} />

    <div>
      <h4>{category.title}</h4>
      <p>Total products: {category.amount}</p>
    </div>
  </AccessoryCategoryItemStyled>
)
