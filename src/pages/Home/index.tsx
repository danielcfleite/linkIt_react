import { MainContainer } from "../../../styles";
import { AddButton } from "../../Components/AddButton";
import { MobileCircles } from "../../Components/MobileCircles";
import { ContactList } from "../../Containers/ContactList";
import { RecentContacts } from "../../Containers/RecentContacts";
import { SideBar } from "../../Containers/Sidebar";

export const Home = () => (
  <>
    <SideBar />
    <MobileCircles/>
    <MainContainer>
      <h1>Contatos</h1>
      <RecentContacts />
      <ContactList />
      <AddButton />
    </MainContainer>
  </>
);
