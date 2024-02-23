import { BsMailbox } from "react-icons/bs";
import { SlPhone } from "react-icons/sl";
import { FaLinkedin, FaInstagram, FaTiktok, FaRegStar } from "react-icons/fa";
import { ContactCardContainer, FavoriteButton, Socials } from "./style";
import { CategoryTitle } from "../../../styles";

export const ContactCard = () => {
  return (
    <ContactCardContainer>
      <img
        src="https://mighty.tools/mockmind-api/content/human/43.jpg"
        alt="adicionar nome"
      />
      <h3>Alice Johnson</h3>
      <CategoryTitle>família</CategoryTitle>
      <Socials>
        <BsMailbox />
        <SlPhone />
        <FaInstagram />
        <FaLinkedin />
        <FaTiktok />
      </Socials>
      <FavoriteButton>
        <FaRegStar />
      </FavoriteButton>
    </ContactCardContainer>
  );
};
