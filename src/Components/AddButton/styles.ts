import styled from "styled-components";
import { colors } from "../../../styles/variables";
import { Link } from "react-router-dom";

export const Circle = styled(Link)`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: ${colors.brand};
  font-size: 50px;
  position: fixed;
  right: 15px;
  bottom: 3vh;
  border: none;
  opacity: 0.6;
  cursor: pointer;
  transition: 0.1s ease-in-out;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 5px;
  text-decoration: none;

  @media (max-width: 1400px){
    display: none;
  }

  &:hover {
    opacity: 1;
  }

  @media (max-width: 1400px){
    opacity: 1;
  }
`;
