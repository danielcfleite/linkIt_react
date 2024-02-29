import styled from "styled-components";
import { colors } from "../../../styles/variables";
import { SocialsContainer } from "../../../styles";

export const ContactCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  width: 900%;
  margin-bottom: 1rem;
  border: 1px solid ${props => props.theme.lowOpacityFontColor};
  height: 150px;
  padding-right: 40px;
  padding-left: 15px;
  cursor: pointer;
  border-radius: 16px;
  -webkit-box-shadow: 2px 5px 11px 2px rgba(0, 0, 0, 0.01);
  box-shadow: 2px 5px 11px 2px rgba(0, 0, 0, 0.01);

  &:hover {
    background-color: ${props => props.theme.selectedGray};
  }

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid ${colors.brand};
  }

  @media (max-width: 1400px){
     display: flex;
     flex-direction: column;
     width: 100%;
     padding: 4rem 0;
     height: 350px;
     gap: 1rem;
  }
`;

export const Socials = styled(SocialsContainer)`
  justify-content: center;
  gap: 1rem;

  * {
    transition: 0.1s ease-in-out;
  }

  *:hover {
    transform: scale(1.06);
  }

  @media (max-width: 1400px){
    display: none;
  }
`;

export const FavoriteButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => props.theme.lowOpacityFontColor};
  border: 1px solid ${props => props.theme.selectedGray};
  color: ${colors.brand};
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  
  *{
    color: ${colors.brand};
  }

  &:hover {
    font-size: 22px;
  }
`;

export const ContactOptionContainer = styled.div`
width: 100%;
display: flex;
gap: 20px;
align-items: center;

@media (max-width: 1400px){
     display: flex;
     flex-direction: row;
     width: 100%;
     padding: 4rem 0;
     gap: 1rem;
  }
`

export const ButtonsContainer = styled.div`
width: 100%;
display: flex;
align-items: center;
gap: 16px;

@media (max-width: 1400px){
     display: flex;
     flex-direction: column;
     width: 20%;
     justify-content: center;
     gap: 1rem;
  }
`

export const RemoveButton = styled(FavoriteButton)`
*{
  color: #d04848;
}

&:hover{
  filter: brightness(1.1);
}
`