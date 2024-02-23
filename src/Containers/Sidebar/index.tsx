import { Link } from "react-router-dom";
// import { RiContactsLine } from "react-icons/ri";
import { RiContactsFill } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
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
          <FaRegStar />
          Favoritos
        </Link>
        <Link to="/">
          <IoSettingsOutline />
          Configurações
        </Link>
        <Link to="/">
          <GrLanguage />
          PT-BR
        </Link>
      </Aside>
    </>
  );
};
