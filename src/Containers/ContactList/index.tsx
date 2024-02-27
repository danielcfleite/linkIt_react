import { useSelector } from "react-redux";
import { SectionTitle } from "../../../styles";
import { ContactCard } from "../../Components/ContactCard";
import { ContactListHeader, Tag, TagContainer } from "./styles";
import { RootReducer } from "../../store";
import { useState } from "react";

export const ContactList = () => {
  const {language} = useSelector((state:RootReducer)=> state.language)
  const {contacts} = useSelector((state:RootReducer)=> state.contacts)
  const [isSearchFavorites, setIsSearchFavorites] = useState(false)
  const favorites = contacts.filter((c)=> c.isFavorite === true)
  
  return (
    <>
   
      <ContactListHeader>
        <SectionTitle> 
          {language === "english" && "Contacts List"}
          {language === "PT-BR" && "Lista de Contatos"}</SectionTitle>
        <TagContainer>
          <Tag selected={!isSearchFavorites} onClick={()=>setIsSearchFavorites(false)}>
          {language === "english" && "All"}
          {language === "PT-BR" && "Todos"}
            </Tag>
          <Tag selected={isSearchFavorites} onClick={()=>setIsSearchFavorites(true)}>
          {language === "english" && "Favorites"}
          {language === "PT-BR" && "Favoritos"}
          </Tag>
        </TagContainer>
      </ContactListHeader>
      <ul>
        {isSearchFavorites && favorites.map((c) => (
          <li key={c.fullName}>
            <ContactCard
             fullName = {c.fullName}
             email ={c.email}
             phoneNumber = {c.phoneNumber}
             profilePictureUrl ={c.profilePictureUrl }
             id ={c.id}
             socialMedia= {c.socialMedia}
             group = {c.group}
             isFavorite = {c.isFavorite}
            />
          </li>))}
          {!isSearchFavorites && contacts.map((c) => (
          <li key={c.fullName}>
            <ContactCard
             fullName = {c.fullName}
             email ={c.email}
             phoneNumber = {c.phoneNumber}
             profilePictureUrl ={c.profilePictureUrl }
             id ={c.id}
             socialMedia= {c.socialMedia}
             group = {c.group}
             isFavorite = {c.isFavorite}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

