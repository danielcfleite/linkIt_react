import { createSlice } from '@reduxjs/toolkit'

type DarkModeState = {
  isDark: boolean
}

const initialState: DarkModeState = {
  isDark: false,
}

const DarkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDark = !state.isDark
    }
  }
})

export const { toggleDarkMode } = DarkModeSlice.actions

export default DarkModeSlice.reducer
