import styled from "styled-components";
import { colors } from "../../../styles/variables";


export const UserContainer = styled.div`
 width: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
`

export const NameAndPicture = styled.div`
margin-top: 20px;
width: 100%;
display:flex;
align-items: center;
justify-content: center;
gap:30px;
img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid ${colors.brand};
 }
 align-items: center;
 margin-bottom: 20px;
`

export const NameAndGroup = styled.div `
display: flex;
flex-direction: column;
gap: -30px;
`

export const Name = styled.h2`
font-size: 1.3rem;
`

export const UserSocialMediaContainer = styled.div`

display: grid;
grid-template-columns: 30px 290px 110px;
width: 500px;
justify-content: center;
gap:20px;
margin-bottom: 10px;
background-color: ${(props) => props.theme.lowOpacityFontColor};
align-items: center;
padding: 20px 0;
border-radius: 10px;
-webkit-box-shadow: 2px 5px 11px 2px rgba(0, 0, 0, 0.01);
box-shadow: 2px 5px 11px 2px rgba(0, 0, 0, 0.01);
border: 1px solid ${props => props.theme.selectedGray};

*{
    color: ${colors.brand};
}

@media (max-width: 1400px){
     display: flex;
     flex-direction: column;
     width: 100%;
     padding: 4rem 0;
     height: 200px;
     gap: 1rem;
  }
`

export const GoToSocialMediaButton = styled.a `
padding: 5px 20px;
background-color: ${colors.brand};
color: ${(props) => props.theme.fontColor};
border: none;
border-radius: 10px;
cursor: pointer;
transition: 0.1s ease-in-out;
font-weight: 600;
display: flex;
align-items: center;
font-size: 1rem;
gap: 5px;
text-decoration: none;

&:hover{
    filter: brightness(1.1);
}

*{
    color: ${(props) => props.theme.fontColor};
}
`