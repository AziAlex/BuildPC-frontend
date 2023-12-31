export enum ThemeEnum {
  light = 'light',
  dark = 'dark',
}

export interface ITheme {
  colors: {
    bg: string
    title: string
    text: string
    secondaryTitle: string
  }
}
