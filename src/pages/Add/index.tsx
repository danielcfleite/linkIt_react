
import { useSelector } from "react-redux";
import { BackButton, MainContainer, PageTitle } from "../../../styles";
import { MobileCircles } from "../../Components/MobileCircles";
import { AddContactForm } from "../../Containers/AddContactForm";
import { SideBar } from "../../Containers/Sidebar";
import { FaArrowLeft } from "react-icons/fa6";
import { RootReducer } from "../../store";

export const Add = () => {
  const {language} = useSelector((state:RootReducer)=> state.language)
  
  return (
    <>
      <SideBar />
      <MobileCircles/>
      <MainContainer>
        <BackButton to="/">
      <FaArrowLeft size={30}/>
      </BackButton>
        <PageTitle>
          {language === "english" && "Add Contact"}
          {language === "PT-BR" && "Adicionar Contato"}
          </PageTitle>
        <AddContactForm/>
      </MainContainer>
    </>
  );
};
