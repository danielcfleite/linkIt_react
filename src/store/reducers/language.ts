import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type LanguageState = {
  language: string
}

const initialState: LanguageState = {
  language: 'PT-BR',
}

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload
    }
  }
})

export const { changeLanguage } = languageSlice.actions

export default languageSlice.reducer
