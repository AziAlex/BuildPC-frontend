import { createSlice } from '@reduxjs/toolkit'
import { DefaultTheme } from 'styled-components'

import { ThemeEnum } from '@/shared/types/styled.ts'
import { darkTheme, lightTheme } from '@/app/styles/theme.ts'

interface UIState {
  theme: DefaultTheme
}

const localTheme = localStorage.getItem('theme')

const initialState: UIState = {
  theme: localTheme
    ? localTheme === ThemeEnum.light
      ? lightTheme
      : darkTheme
    : lightTheme,
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      localStorage.setItem(
        'theme',
        state.theme.type === ThemeEnum.light ? ThemeEnum.dark : ThemeEnum.light,
      )
      state.theme =
        state.theme.type === ThemeEnum.light ? darkTheme : lightTheme
    },
  },
})

export const { toggleTheme } = uiSlice.actions

export default uiSlice.reducer
