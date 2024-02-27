import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/contact'

type ContactsState = {
  contacts: Contact[]
  uniqueGroups: string[]
}

const initialState: ContactsState = {
  contacts: [
    { 
        group: "Família",
        fullName: 'Daniel Carvalho',
        email: "danielcfreitasleite@gmail.com",
        phoneNumber: "12 98293-4040",
        profilePictureUrl: "https://github.com/danielcfleite.png",
        id: 1,
        socialMedia: {},
        isFavorite: false
    }    
  ],
  uniqueGroups: ['família', 'trabalho']
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
   createContact: (state, action: PayloadAction<Contact>) => {
    state.contacts.push(action.payload)
    localStorage.setItem('contacts', JSON.stringify(state.contacts))
   },
   setFavorite: (state, action:PayloadAction<number>) => {
    const userToFavorite = state.contacts.find(c => c.id === action.payload) 
    if (!userToFavorite) {
      alert ('usuário não encontrado')
    } else {
      userToFavorite.isFavorite = !userToFavorite.isFavorite
    }
   },
   getUniqueGroups: (state) => {
    const uniqueGroups:any = []
    state.contacts.forEach((c)=>{
      if(!uniqueGroups.includes(c.group)){
        uniqueGroups.push(c.group)
      }
      state.uniqueGroups = uniqueGroups
    })
   },
   loadContactsFromLocalStorage: (state) => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      state.contacts = JSON.parse(storedContacts)
    }
   }
  }
})

export const { createContact, setFavorite, getUniqueGroups, loadContactsFromLocalStorage } = contactsSlice.actions

export default contactsSlice.reducer
