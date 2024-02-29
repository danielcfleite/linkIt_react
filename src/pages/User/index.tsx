import { FaArrowLeft } from "react-icons/fa"
import { BackButton, CategoryTitle, MainContainer, PageTitle } from "../../../styles"
import { MobileCircles } from "../../Components/MobileCircles"
import { SideBar } from "../../Containers/Sidebar"
import { useSelector } from "react-redux"
import { RootReducer } from "../../store"
import { useParams } from "react-router-dom"
import { GoToSocialMediaButton, Name, NameAndGroup, NameAndPicture, UserContainer, UserSocialMediaContainer } from "./styles"
import { MdEmail } from "react-icons/md";
import { SlPhone } from "react-icons/sl";
import { FaLinkedin, FaInstagram, FaTiktok, FaGithub, FaFacebook } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

export const UserPage = () => { 
    const {language} = useSelector((state:RootReducer)=> state.language)
    const {contacts} = useSelector((state:RootReducer)=> state.contacts)
    const { id } = useParams();
    const user = contacts.find((c) => c.id === id)
    const {email,fullName,group,isFavorite,phoneNumber,profilePictureUrl,socialMedia } = user! 
    const {facebook,github,instagram,linkedin,tiktok} = socialMedia!

    if (!user) {
        return <div>User not found</div>;
      } 
      
    return(
<>
        <SideBar/>
        <MobileCircles/>
        <MainContainer>
        <BackButton to="/">
      <FaArrowLeft size={30}/>
      </BackButton>
      <NameAndPicture>
          <img src={profilePictureUrl} alt={fullName} />
      <NameAndGroup>
          <Name> {fullName}</Name>
          <CategoryTitle>{group}</CategoryTitle>
          </NameAndGroup>
          </NameAndPicture>
          
        <UserContainer>
        <UserSocialMediaContainer>
        <MdEmail /> {email}
            <GoToSocialMediaButton href={`mailto:${email}`}>Enviar <IoIosSend /></GoToSocialMediaButton>
        </UserSocialMediaContainer> 
         <div>
        
        </div>
      
        <UserSocialMediaContainer>
            <SlPhone/> {phoneNumber}

        </UserSocialMediaContainer> 
  
        
        {facebook?
        <UserSocialMediaContainer>
            <FaFacebook/>  {facebook}
            <GoToSocialMediaButton href={`https://facebook.com/${facebook}`} target="_blank">Visitar <IoIosSend /></GoToSocialMediaButton>
        </UserSocialMediaContainer>
        :
        <></>
        }
          {instagram?
        <UserSocialMediaContainer>
            <FaInstagram/>  {instagram}
            <GoToSocialMediaButton href={`https://instagram.com/${instagram}`} target="_blank">Visitar <IoIosSend /></GoToSocialMediaButton>
        </UserSocialMediaContainer>
        :
        <></>
        }
          {tiktok?
        <UserSocialMediaContainer>
            <FaTiktok/>  {tiktok}
            <GoToSocialMediaButton href={`https://tiktok.com/@${tiktok}`} target="_blank">Visitar <IoIosSend /></GoToSocialMediaButton>
        </UserSocialMediaContainer>
        :
        <></>
        }
          {github?
        <UserSocialMediaContainer>
            <FaGithub/>  {github}
            <GoToSocialMediaButton href={`https://github.com/${github}`} target="_blank">Visitar <IoIosSend /></GoToSocialMediaButton>
        </UserSocialMediaContainer>
        :
        <></>
        }
          {linkedin?
        <UserSocialMediaContainer>
            <FaLinkedin/>  {linkedin}
            <GoToSocialMediaButton href={`https://linkedin.com/${email}`} target="_blank">Visitar <IoIosSend /></GoToSocialMediaButton>
        </UserSocialMediaContainer>
        :
        <></>
        }
        
          </UserContainer>
        </MainContainer>
        </>
)

}