import { IoMdAdd } from "react-icons/io";
import { CircleLink, MobileCirclesNav } from "./styles";
import { GrLanguage } from "react-icons/gr";
import { CiSun } from "react-icons/ci";


export const MobileCircles = () => {
    return(
  <>
      <MobileCirclesNav>
        <CircleLink to ="add" ><CiSun size={26}/> </CircleLink>
        <CircleLink to ="add"> <GrLanguage size={26}/></CircleLink>
        <CircleLink to ="add"><IoMdAdd size={26}/></CircleLink>
      </MobileCirclesNav>
      </> 
    )
}