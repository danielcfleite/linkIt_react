import { BsMailbox } from "react-icons/bs";
import { SlPhone } from "react-icons/sl";
import { FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa";
import { GoStar, GoStarFill } from "react-icons/go";
import { ContactCardContainer, FavoriteButton, Socials } from "./style";
import { CategoryTitle } from "../../../styles";
import ContactClass from "../../models/contact"
import { useDispatch } from "react-redux";
import { setFavorite } from "../../store/reducers/contacts";

type Props = ContactClass

export const ContactCard = ({fullName,
  // email,
  // phoneNumber,
  profilePictureUrl,
  id,
  // socialMedia,
  group,
isFavorite}: Props) => {
  const dispatch = useDispatch()
  return (
    <ContactCardContainer>
      <img
        src={profilePictureUrl}
        alt={fullName}
      />
      <h3>{fullName}</h3>
      <CategoryTitle>{group}</CategoryTitle>
      <Socials>
        <BsMailbox />
        <SlPhone />
        <FaInstagram />
        <FaLinkedin />
        <FaTiktok />
      </Socials>
      <FavoriteButton onClick={() => dispatch(setFavorite(id))}>
        {isFavorite? <GoStarFill/> : <GoStar/> }
      </FavoriteButton>
    </ContactCardContainer>
  );
};
