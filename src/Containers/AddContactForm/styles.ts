import styled from "styled-components";
import { colors } from "../../../styles/variables";

interface SelectionFormProps {
    select?: boolean;
}

interface SocialMediaContainerProps {
    selected?: boolean
}

export const SectionForm = styled.div<SelectionFormProps>`
display: flex;
flex-direction: column;
gap: 1rem;

input{
    width: ${props => props.select? "60%" : "100%" };
    padding: 0.7rem 0.5rem;
    border-radius: 10px;
    border: none;
    background-color: ${colors.lowOpacityFontColor};

    &:focus{
        outline: 2px solid ${colors.brand};
    }

}

select {
    width: 200px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    font-size: 16px;
    color: #333;

    
}


`

export const SocialMediaContainer = styled.div<SocialMediaContainerProps>`
   display: flex;
    gap: 1rem;
    align-items: center;
    margin-bottom: 1rem;


    ${props => props.selected ? `
        * {
            color: ${colors.brand};
        }
    ` : `color: ${colors.fontColor};`}

    input {
        width: 70%;
        padding: 0.7rem 0.5rem;
        border-radius: 10px;
        border: none;
        background-color: ${colors.lowOpacityFontColor};

        &:focus {
            outline: 2px solid ${colors.brand};
        }
    }
`;

export const SubmitButton = styled.button `
margin-top: 1rem;
padding: 0.8rem 1rem ;
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


&:hover{
    filter: brightness(1.06)
}
`