import { categoriesAccessories } from '@/shared/data/categoriesAccessories.ts'
import { AccessoryCategoryItem } from '@/entities/accessory-category-item/index.tsx'
import { Icon } from '@/shared/svg'
import {
  AccessoriesCategoriesList,
  ContentBox,
  Logo,
  NavAccessoriesWrapper,
  NavAccessoriesWrapperLayout,
} from './style.ts'

export const NavAccessories = () => {
  return (
    <NavAccessoriesWrapperLayout>
      <NavAccessoriesWrapper>
        <ContentBox>
          <Logo>
            <Icon name={'logo'} />
            <span>Components</span>
          </Logo>

          <AccessoriesCategoriesList>
            {categoriesAccessories.map((category) => (
              <AccessoryCategoryItem key={category.id} category={category} />
            ))}
          </AccessoriesCategoriesList>
        </ContentBox>
      </NavAccessoriesWrapper>
    </NavAccessoriesWrapperLayout>
  )
}
