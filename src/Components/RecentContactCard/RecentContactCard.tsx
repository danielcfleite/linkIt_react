import { BsMailbox } from "react-icons/bs";
import { SlPhone } from "react-icons/sl";
import { FaLinkedin, FaInstagram, FaTiktok, FaFacebook, FaGithub } from "react-icons/fa";
import {
  RecentContactCardContainer,
  EmailAndPhoneContainer,
  EmailAndPhoneItemContainer,
  NameAndCateoryContainer,
} from "./styles";
import { CategoryTitle, SocialsContainer } from "../../../styles";
import ContactClass from "../../models/contact"
import { useNavigate } from "react-router-dom";
type Props = ContactClass

export const RecentContactCard = ({fullName,
  // email,
  // phoneNumber,
  profilePictureUrl,
  id,
  socialMedia,
  group,
// isFavorite
}: Props) => {
  const navigate = useNavigate()
  return (
 
    <RecentContactCardContainer onClick={()=> navigate(`/user/${id}`)}>
         <img
    src= {profilePictureUrl}
    alt={fullName}
  />
      <NameAndCateoryContainer>
        <h2>{fullName}</h2>
        <CategoryTitle>{group}</CategoryTitle>
      </NameAndCateoryContainer>
    </RecentContactCardContainer>
  );
};
