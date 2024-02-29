import { configureStore } from '@reduxjs/toolkit'
import languageReducer from './reducers/language'
import darkModeReducer from './reducers/darkMode'
import contactsReducer from './reducers/contacts'

export const store = configureStore({
  reducer: {
    language: languageReducer,
    darkMode: darkModeReducer,
    contacts: contactsReducer,
  }
})

export type RootReducer = ReturnType<typeof store.getState>
