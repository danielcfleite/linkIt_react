import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../../styles/variables";

interface MobileMenuProps {
    isOpen: boolean
}

export const MobileNavWrapper = styled.div `
z-index: 3;
position: fixed;
@media (min-width: 1401px){
display: none;
}
`

export const HamburguerWrapper = styled.div`
z-index: 10;
position: fixed;
@media (min-width: 1401px){
display: none;
}
`

export const MobileMenu = styled.div<MobileMenuProps>`
  z-index: 3;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-direction: column;
  top: 0;
  right: 0;
  background-color: white;
  width: 100vw;
  height: 100vh;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(-100%)")};
  
`;

export const Logo = styled.img`
width: 150px;
`

export const ButtonNav = styled(Link)`
color: ${colors.brand};
text-decoration: none;
font-weight: bold;
font-size: 1.3rem;
`