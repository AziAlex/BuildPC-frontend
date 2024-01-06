import { configureStore } from '@reduxjs/toolkit'
import { uiSlice } from '@/app/redux/slice/theme.slice.ts'

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
