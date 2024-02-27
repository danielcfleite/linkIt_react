import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../store"
import { BackButton, MainContainer, PageTitle } from "../../../styles"
import { FaArrowLeft } from "react-icons/fa"
import { SideBar } from "../../Containers/Sidebar"
import { useEffect } from "react"
import { getUniqueGroups, loadContactsFromLocalStorage } from "../../store/reducers/contacts"
import { GroupBy } from "../../Containers/GroupBy"

export const GroupsPage = () => {

    const {language} = useSelector((state:RootReducer)=> state.language)
    const {contacts} = useSelector((state:RootReducer)=> state.contacts)
    const dispatch = useDispatch()
    useEffect(() => {
      
        dispatch(loadContactsFromLocalStorage());
        console.log(contacts)
      }, []);

    return(
        <>
        <SideBar/>
        <MainContainer>
        <BackButton to="/">
      <FaArrowLeft size={30}/>
      </BackButton>
      <PageTitle>
          {language === "english" && "Groups"}
          {language === "PT-BR" && "Grupos"}
          </PageTitle>
          <GroupBy/>
        </MainContainer>
        </>
    )
}