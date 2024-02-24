import styled from "styled-components";
import { EmailAndPhoneItemContainer } from "../../Components/RecentContactCard/styles";
import { colors } from "../../../styles/variables";

export const ContactListHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface TagProps {
  selected?: boolean; // Define prop types
}

export const Tag = styled(EmailAndPhoneItemContainer)<TagProps>`
  border: none;
  width: 200px;
  height: 30px;
  margin-top: 1.5rem;
  font-weight: bold;
  background-color: ${(props) =>
    props.selected ? colors.brand : colors.secondaryFontColor};
  opacity: ${(props) => (props.selected ? "1" : "0.6")};

  &:hover {
    transform: scale(1.02);
  }
`;

export const TagContainer = styled.div`
  display: flex;
  gap: 2rem;
`;
