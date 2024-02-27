import { useSelector } from "react-redux";
import { SectionTitle } from "../../../styles";
import { RecentContactCard } from "../../Components/RecentContactCard/RecentContactCard";
import { RecentContactsContainer } from "./styles";
import { RootReducer } from "../../store";

export const RecentContacts = () => {
  const {language} = useSelector((state:RootReducer)=> state.language)
  const {contacts} = useSelector((state:RootReducer)=> state.contacts)
  const recentContacts = contacts.slice(-10)

  return (
    <>
      <SectionTitle>
      {language === "english" && "New Contacts"}
          {language === "PT-BR" && "Contatos Recentes"}</SectionTitle>

      <RecentContactsContainer>
      {recentContacts.map((i) => (
            <RecentContactCard
            key={i.fullName}
             fullName = {i.fullName}
             email ={i.email}
             phoneNumber = {i.phoneNumber}
             profilePictureUrl ={i.profilePictureUrl }
             id ={i.id}
             socialMedia= {i.socialMedia}
             group = {i.group}
             isFavorite = {i.isFavorite}
            />
        ))}
      </RecentContactsContainer>
    </>
  );
};
