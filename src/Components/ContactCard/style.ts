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
`;

export const Socials = styled(SocialsContainer)`
  justify-content: center;
  gap: 1rem;
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
