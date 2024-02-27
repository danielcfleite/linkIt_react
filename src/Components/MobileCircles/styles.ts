import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../../styles/variables";

export const MobileCirclesNav = styled.div `
width: 100px;
display: flex;
flex-direction: column;
gap: 1rem;
position: fixed;
bottom: 20px;
right: -45px;

@media (min-width: 1400px){
    display: none;
}

`

export const CircleLink = styled(Link)`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: ${colors.brand};
text-decoration: none;
display: flex;
align-items: center;
justify-content: center;
color: white;
font-size: 50px;
border: none;
`

export const CircleButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${colors.brand};
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 50px;
  border: none;
  cursor: pointer; /* Add cursor pointer to indicate it's clickable */
`;