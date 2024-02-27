import { useDispatch, useSelector } from "react-redux";
import { MainContainer } from "../../../styles";
import { AddButton } from "../../Components/AddButton";
import { MobileCircles } from "../../Components/MobileCircles";
import { ContactList } from "../../Containers/ContactList";
import { RecentContacts } from "../../Containers/RecentContacts";
import { SideBar } from "../../Containers/Sidebar";
import { RootReducer } from "../../store";
import { useEffect } from "react";
import { loadContactsFromLocalStorage } from "../../store/reducers/contacts";

export const Home = () => {
  const {language} = useSelector((state:RootReducer)=> state.language)
  const {contacts} = useSelector((state:RootReducer)=> state.contacts)
  const dispatch = useDispatch()
  useEffect(() => {
    
      dispatch(loadContactsFromLocalStorage());
      console.log(contacts)
    }, []);
  return(
  <>
    <SideBar />
    <MobileCircles/>
    <MainContainer>
      <h1>  
        {language === "english" && "Contacts"}
        {language === "PT-BR" && "Contatos"}</h1>
      <RecentContacts />
      <ContactList />
      <AddButton />
    </MainContainer>
  </>
)}
