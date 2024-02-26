import Hamburger from 'hamburger-react'
import { useState } from 'react';
import { ButtonNav, HamburguerWrapper, Logo, MobileMenu, MobileNavWrapper } from './styles';
import { colors } from '../../../styles/variables';
import logo from "../../assets/brand.png";
import { Link } from 'react-router-dom';

export const MobileNav = () => {
    const [isOpen, setOpen] = useState(false);
    const handleToggleMenu = () => {
        setOpen(!isOpen);
        document.documentElement.style.overflow = isOpen ? "auto" : "hidden";
      };
    return(
  <>
          <HamburguerWrapper>
        <Hamburger
        toggled={isOpen}
        toggle={handleToggleMenu}
        direction="right"
        color={colors.brand}
      />
   </HamburguerWrapper>
       <MobileMenu isOpen={isOpen}>
        <ButtonNav to="/add">Adicionar</ButtonNav>
        <ButtonNav to="/add">Linguagem</ButtonNav>
        <ButtonNav to="/add">Light</ButtonNav>
      </MobileMenu>
      </> 
    )
}