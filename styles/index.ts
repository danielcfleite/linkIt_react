import styled, { createGlobalStyle } from "styled-components";
import { colors } from "./variables";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
  list-style: none;
  user-select: none;

  /* width */
::-webkit-scrollbar {
  width: 0.5rem;
  height: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background-color: ${colors.lightGray};
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: ${colors.brand};
  border-radius: 10px;
  cursor: move;

}
}

body{
  overflow: hidden;
}
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 244px auto;
`;

export const MainContainer = styled.main`
  padding: 25px 50px;
  height: 100vh;
  overflow-y: scroll;
`;

export const SectionTitle = styled.h2`
  display: block;
  margin-bottom: 1.5rem;
  opacity: 0.5;
  margin-top: 1.5rem;
`;

export const SocialsContainer = styled.div`
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${colors.socialIcons};

  *:hover {
    color: ${colors.brand};
    opacity: 1;
  }
`;

export const CategoryTitle = styled.h3`
  opacity: 0.3;
  font-size: 1rem;
  font-weight: bold;
`;
