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

export const RecentContactCard = () => {
  return (
    <RecentContactCardContainer>
      <NameAndCateoryContainer>
        <h2>Alice Johnson</h2>
        <CategoryTitle>família</CategoryTitle>
      </NameAndCateoryContainer>
      <img
        src="https://mighty.tools/mockmind-api/content/human/43.jpg"
        alt="adicionar nome"
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
