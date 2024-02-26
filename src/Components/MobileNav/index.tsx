import Hamburger from 'hamburger-react'
import { useState } from 'react';
import { ButtonNav, HamburguerWrapper, MobileMenu } from './styles';
import { colors } from '../../../styles/variables';

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