import styled from "styled-components";
import { colors } from "../../../styles/variables";

export const Aside = styled.aside`
  padding: 16px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 2rem;
  border-right: 2px solid rgba(0, 0, 0, 0.009);
  font-weight: 500;

  a {
    text-decoration: none;
    color: ${colors.secondaryFontColor};
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.3rem;
    border-right: 1px solid transparent;
    transition: 0.2s ease-in-out;

    :first-child {
      transition: 0.05s ease-in-out;
    }

    &:hover > :first-child {
      color: ${colors.brand};
    }

    &:hover {
      border-right: 1px solid ${colors.brand};
    }
  }

  img {
    margin-bottom: 1.5rem;
  }
`;
