import { IoMdAdd } from "react-icons/io";
import { CircleButton, CircleLink, MobileCirclesNav } from "./styles";
import { GrLanguage } from "react-icons/gr";
import { CiCloudMoon, CiSun } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../../store/reducers/language";
import { RootReducer } from "../../store";
import { toggleDarkMode } from "../../store/reducers/darkMode";


export const MobileCircles = () => {
  const dispatch = useDispatch()
  const {language} = useSelector((state:RootReducer)=> state.language)
  const {isDark} = useSelector((state:RootReducer)=> state.darkMode)
  const handleLanguageChange = () => { 
    if (language === "PT-BR") {
      dispatch(changeLanguage("english"))
    } else {
      dispatch(changeLanguage("PT-BR"))
    }
  }
    return(
  <>
      <MobileCirclesNav>
      <CircleButton onClick={()=> dispatch(toggleDarkMode())}>{isDark?  <><CiSun /></>: <> <CiCloudMoon /></>} </CircleButton>
        <CircleButton onClick={handleLanguageChange}> <GrLanguage size={26}/></CircleButton>
        <CircleLink to ="/add"><IoMdAdd size={26}/></CircleLink>
      </MobileCirclesNav>
      </> 
    )
}