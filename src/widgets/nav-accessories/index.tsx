import { NavAccessoriesWrapper, NavAccessoriesWrapperLayout } from './style.ts'
import { useAppDispatch } from '@/app/redux/hooks.ts'
import { toggleTheme } from '@/app/redux/slice/theme.slice.ts'


export const NavAccessories = () => {
  const dispatch = useAppDispatch()

  return (
    <NavAccessoriesWrapperLayout>
      <NavAccessoriesWrapper>
        <button onClick={() => dispatch(toggleTheme())}>
          123
        </button>
      </NavAccessoriesWrapper>
    </NavAccessoriesWrapperLayout>
  )
}