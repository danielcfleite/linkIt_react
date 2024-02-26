import styled from "styled-components";
import { colors } from "../../../styles/variables";
import { SocialsContainer } from "../../../styles";

export const ContactCardContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 1rem;
  border: 1px solid ${colors.lowOpacityFontColor};
  height: 150px;
  align-items: center;
  justify-content: space-between;
  padding-right: 40px;
  padding-left: 15px;
  cursor: pointer;
  border-radius: 16px;
  -webkit-box-shadow: 2px 5px 11px 2px rgba(0, 0, 0, 0.005);
  box-shadow: 2px 5px 11px 2px rgba(0, 0, 0, 0.005);

  &:hover {
    background-color: ${colors.selectedGray};
  }

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid ${colors.brand};
  }

  @media (max-width: 1400px){
     flex-direction: column;
     width: 100%;
     padding: 4rem 0;
     height: 350px;
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
  background-color: ${colors.lowOpacityFontColor};
  border: 1px solid ${colors.selectedGray};
  color: ${colors.brand};
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    font-size: 22px;
  }
`;
