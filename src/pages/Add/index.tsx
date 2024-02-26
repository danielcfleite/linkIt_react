
import { BackButton, MainContainer, PageTitle } from "../../../styles";
import { AddContactForm } from "../../Containers/AddContactForm";
import { SideBar } from "../../Containers/Sidebar";
import { FaArrowLeft } from "react-icons/fa6";

export const Add = () => {
  return (
    <>
      <SideBar />
      <MainContainer>
        <BackButton to="/">
      <FaArrowLeft size={30}/>
      </BackButton>
        <PageTitle>Adicionar Contato</PageTitle>
        <AddContactForm/>
      </MainContainer>
    </>
  );
};
