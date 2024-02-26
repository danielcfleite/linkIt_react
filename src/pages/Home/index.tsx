import { MainContainer } from "../../../styles";
import { AddButton } from "../../Components/AddButton";
import { MobileNav } from "../../Components/MobileNav";
import { ContactList } from "../../Containers/ContactList";
import { RecentContacts } from "../../Containers/RecentContacts";
import { SideBar } from "../../Containers/Sidebar";

export const Home = () => (
  <>
  <MobileNav/>
    <SideBar />
    <MainContainer>
      <h1>Contatos</h1>
      <RecentContacts />
      <ContactList />
      <AddButton />
    </MainContainer>
  </>
);
