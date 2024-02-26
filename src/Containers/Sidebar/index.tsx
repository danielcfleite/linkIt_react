import { Link } from "react-router-dom";
// import { RiContactsLine } from "react-icons/ri";
import { RiContactsFill } from "react-icons/ri";
import { LuSunMedium } from "react-icons/lu";
import { GrLanguage } from "react-icons/gr";

import { Aside } from "./styles";
import logo from "../../assets/brand.png";

export const SideBar = () => {
  return (
    <>
      <Aside>
        <img src={logo} alt="" />
        <Link to="/">
          <RiContactsFill />
          Contatos
        </Link>

        <Link to="/">
        <LuSunMedium />
           Light
        </Link>
        <Link to="/">
          <GrLanguage />
          PT-BR
        </Link>
      </Aside>
    </>
  );
};
