import styled from "styled-components";
import { colors } from "../../../styles/variables";

export const RecentContactCardContainer = styled.div`
  min-width: 250px;
  height: 350px;
  background-color: transparent;
  border: 1px solid ${props => props.theme.selectedGray};
  gap: 1.3rem;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: 2px 5px 11px 2px rgba(0, 0, 0, 0.005);
  box-shadow: 2px 5px 11px 2px rgba(0, 0, 0, 0.005);
  cursor: pointer;
  transition: 0.1s;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export const EmailAndPhoneContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const EmailAndPhoneItemContainer = styled.button`
  display: flex;
  gap: 8px;
  color: white;
  background-color: ${colors.brand};
  width: 50%;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  transition: 0.1s;
  padding: 8px 0;

  &:hover {
    transform: scale(1.1);
  }
`;

export const NameAndCateoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`;
