import {
  RecentContactCardContainer,
  NameAndCateoryContainer,
} from "./styles";
import { CategoryTitle } from "../../../styles";
import ContactClass from "../../models/contact"
import { useNavigate } from "react-router-dom";
type Props = ContactClass

export const RecentContactCard = ({fullName,
  profilePictureUrl,
  id,
  group,
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
