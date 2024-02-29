import { BsMailbox } from "react-icons/bs";
import { SlPhone } from "react-icons/sl";
import { GoStar, GoStarFill } from "react-icons/go";
import { ButtonsContainer, ContactCardContainer, ContactOptionContainer, FavoriteButton, RemoveButton, Socials } from "./style";
import { CategoryTitle } from "../../../styles";
import ContactClass from "../../models/contact"
import { useDispatch } from "react-redux";
import { deleteContact, setFavorite } from "../../store/reducers/contacts";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

type Props = ContactClass

export const ContactCard = ({fullName,
  // email,
  // phoneNumber,
  profilePictureUrl,
  id,
  group,
isFavorite}: Props) => {
  const dispatch = useDispatch()
  const navigate= useNavigate()
  const handleDelete = () => { 
    const willDelete = confirm(`Deletar ${fullName}?`)
    if(willDelete){
      dispatch(deleteContact(id))
    } else {
      return
    }
  }
  return (
    <ContactOptionContainer>
    <ContactCardContainer onClick={()=> navigate(`/user/${id}`)}>
      <img
        src={profilePictureUrl}
        alt={fullName}
      />
      <h3>{fullName}</h3>
      <CategoryTitle>{group}</CategoryTitle>

    </ContactCardContainer>
    <ButtonsContainer>
          <FavoriteButton onClick={() => dispatch(setFavorite(id))}>
          {isFavorite? <GoStarFill/> : <GoStar/> }
        </FavoriteButton>
        <RemoveButton onClick={()=> handleDelete()}><FaTrashAlt/></RemoveButton>
        </ButtonsContainer>
        </ContactOptionContainer>
  );
};
