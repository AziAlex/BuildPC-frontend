import { DefaultTheme } from 'styled-components'
import { ThemeEnum, ITheme } from '@/shared/types/styled.ts'

export const baseTheme: ITheme = {
  colors: {
    bg: '#FFFFFF',
    title: '#4B4B4B',
    text: '#888888',

    secondaryTitle: '#C2C2C2',
  },
}

export const lightTheme: DefaultTheme = {
  ...baseTheme,
  type: ThemeEnum.light,

  colors: {
    ...baseTheme.colors,
    bg: '#FFFFFF',
  },
}

export const darkTheme: DefaultTheme = {
  ...baseTheme,
  type: ThemeEnum.dark,

  colors: {
    ...baseTheme.colors,
    bg: '#000',
  },
}
