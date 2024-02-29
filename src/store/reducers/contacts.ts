import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/contact'

type ContactsState = {
  contacts: Contact[]
  uniqueGroups: string[]
}

const initialState: ContactsState = {
  contacts: [
    { 
        group: "Desenvolvedor",
        fullName: 'Daniel Carvalho',
        email: "danielcfreitasleite@gmail.com",
        phoneNumber: "12 98293-4040",
        profilePictureUrl: "https://github.com/danielcfleite.png",
        id: "aoba",
        socialMedia: {
          facebook: "danielcfleite",
          github: "/danielcfleite",
          instagram: "/danielcfleite",
          linkedin: "/danielcfleite",
          tiktok: "/danielcfleite"
        },
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
   setFavorite: (state, action:PayloadAction<string>) => {
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
   },
   deleteContact: (state, action:PayloadAction<string>) =>{
    const userIdToDelete = action.payload
    state.contacts = state.contacts.filter((c) => c.id !== userIdToDelete)
    localStorage.setItem('contacts', JSON.stringify(state.contacts))
   },
   updateContact: (state, action: PayloadAction<Contact>) => {
    const userToEditIndex = state.contacts.findIndex((c) => c.id === action.payload.id)
    if (userToEditIndex >= 0) {
      state.contacts[userToEditIndex] = action.payload
      localStorage.setItem('contacts', JSON.stringify(state.contacts))
    }
   },
  }
})

export const { createContact, setFavorite, getUniqueGroups, loadContactsFromLocalStorage, deleteContact, updateContact } = contactsSlice.actions

export default contactsSlice.reducer
