import styled from "styled-components";
import { colors } from "../../../styles/variables";

interface SelectionFormProps {
  select?: boolean;
}

interface SocialMediaContainerProps {
  selected?: boolean;
  theme: {
    fontColor: string;
    secondaryFontColor: string;
    lowOpacityFontColor: string;
    socialIcons: string;
    selectedGray: string;
    lightGray: string;
    brand: string;
    backgroundColor: string;
  };
}

export const SectionForm = styled.div<SelectionFormProps>`
  display: flex;
  flex-direction: ${(props) => (props.select ? "row" : "column")};
  align-items: center;
  gap: 1rem;

  input {
    width: ${(props) => (props.select ? "60%" : "100%")};
    margin: 0;
    padding: 0.7rem 0.5rem;
    border-radius: 10px;
    border: none;
    background-color: ${(props) => props.theme.lowOpacityFontColor};

    &:focus {
      outline: 2px solid ${colors.brand};
    }
  }

  select {
    width: 200px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: ${(props) =>
      props.theme.lowOpacityFontColor}; /* Set background color */
    font-size: 16px;
    color: ${(props) => props.theme.fontColor};

    color: black;
  }

  select option {
    background-color: ${(props) => props.theme.backgroundColor};
    font-weight: bold;
    color: ${(props) => props.theme.fontColor};
  }
`;

export const SocialMediaContainer = styled.div<SocialMediaContainerProps>`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;

  ${(props) =>
    props.selected
      ? `
        * {
            color: ${colors.brand};
        }
    `
      : `color: ${(props: any) => props.theme.fontcolor};`} // @ts-ignore

    input {
    width: 70%;
    padding: 0.7rem 0.5rem;
    border-radius: 10px;
    border: none;
    background-color: ${(props) => props.theme.lowOpacityFontColor};

    &:focus {
      outline: 2px solid ${colors.brand};
    }
  }
`;

export const Button = styled.button`
  padding: 0.8rem 1rem;
  border-radius: 15px;
  border: none;
  background-color: ${colors.brand};
  color: white;
  cursor: pointer;
  transition: 0.1s ease-in-out;
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;

  &[type="submit"] {
    margin-top: 3rem;
  }

  &:hover {
    filter: brightness(1.06);
  }
`;
