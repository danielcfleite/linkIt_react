import { BsMailbox } from "react-icons/bs";
import { SlPhone } from "react-icons/sl";
import { FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa";
import {
  RecentContactCardContainer,
  EmailAndPhoneContainer,
  EmailAndPhoneItemContainer,
  NameAndCateoryContainer,
} from "./styles";
import { CategoryTitle, SocialsContainer } from "../../../styles";
import ContactClass from "../../models/contact"
type Props = ContactClass

export const RecentContactCard = ({fullName,
  email,
  phoneNumber,
  profilePictureUrl,
  id,
  socialMedia,
  group,
isFavorite}: Props) => {
  return (
    <RecentContactCardContainer>
      <NameAndCateoryContainer>
        <h2>{fullName}</h2>
        <CategoryTitle>{group}</CategoryTitle>
      </NameAndCateoryContainer>
      <img
        src= {profilePictureUrl}
        alt={fullName}
      />
      <EmailAndPhoneContainer>
        <EmailAndPhoneItemContainer>
          <BsMailbox />
          Email
        </EmailAndPhoneItemContainer>
        <EmailAndPhoneItemContainer>
          <SlPhone />
          Telefone
        </EmailAndPhoneItemContainer>
      </EmailAndPhoneContainer>
      <SocialsContainer>
        <FaInstagram />
        <FaTiktok />
        <FaLinkedin />
      </SocialsContainer>
    </RecentContactCardContainer>
  );
};
