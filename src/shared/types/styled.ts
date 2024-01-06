export enum ThemeEnum {
  light = 'light',
  dark = 'dark',
}

export interface ITheme {
  colors: {
    white: string;
    black: string;
    gray: string;
    bg: string;
    title: string;
    text: string;
    secondaryTitle: string;
  }
}
