import styled from "styled-components";
import { colors } from "../../../styles/variables";

export const RecentContactCardContainer = styled.div`
  min-width: 250px;
  height: 350px;
  background-color: transparent;
  border: 1px solid ${colors.selectedGray};
  gap: 1.3rem;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: 2px 5px 11px 2px rgba(0, 0, 0, 0.005);
  box-shadow: 2px 5px 11px 2px rgba(0, 0, 0, 0.005);
  cursor: pointer;
  transition: 0.3s ease-in-out;

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

export const EmailAndPhoneItemContainer = styled.div`
  display: flex;
  gap: 8px;

  :first-child {
    color: ${colors.brand};
  }
`;

export const NameAndCateoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`;
