import { Link } from "react-router-dom";
// import { RiContactsLine } from "react-icons/ri";
import { RiContactsFill } from "react-icons/ri";
import { CiCloudMoon, CiSun } from "react-icons/ci";
import { GrLanguage } from "react-icons/gr";
import { FaAddressBook } from "react-icons/fa";
import { Aside } from "./styles";
import logo from "../../assets/brand.png";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";
import { changeLanguage } from "../../store/reducers/language";
import { toggleDarkMode } from "../../store/reducers/darkMode";

export const SideBar = () => {
  const {language} = useSelector((state:RootReducer)=> state.language)
  const {isDark} = useSelector((state:RootReducer)=> state.darkMode)
  const dispatch = useDispatch()
  const dispatchToggleDarkMode = () => {
    dispatch(toggleDarkMode())
  }
  const handleLanguageChange = () => { 
    if (language === "PT-BR") {
      dispatch(changeLanguage("english"))
    } else {
      dispatch(changeLanguage("PT-BR"))
    }
  }

  return (
    <>
      <Aside>
       
        <Link to="/">
          <RiContactsFill />
          {language === "english" && "Contacts"}
          {language === "PT-BR" && "Contatos"}
        </Link>
        <Link to="/groups">
        <FaAddressBook />
          {language === "english" && "Groups"}
          {language === "PT-BR" && "Grupos"}
        </Link>

        <a onClick={dispatchToggleDarkMode}>
          
          {isDark?  <><CiSun />Light </>: <> <CiCloudMoon />Dark </>}
        </a>
        <a onClick={handleLanguageChange}>
          <GrLanguage />
          {language}
        </a>
      </Aside>
    </>
  );
};
