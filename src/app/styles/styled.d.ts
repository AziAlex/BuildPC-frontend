import 'styled-components'
import { ITheme, ThemeEnum } from '@/shared/types/styled.ts'

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {
    type: ThemeEnum
  }
}
