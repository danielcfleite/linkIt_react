import { SectionTitle } from "../../../styles";
import { ContactCard } from "../../Components/ContactCard";
import { ContactListHeader, Tag, TagContainer } from "./styles";

export const ContactList = () => {
  return (
    <>
      <ContactListHeader>
        <SectionTitle>Lista de Contatos</SectionTitle>
        <TagContainer>
          <Tag>Todos</Tag>
          <Tag selected>Favoritos</Tag>
        </TagContainer>
      </ContactListHeader>
      <ul>
        <li>
          <ContactCard />
        </li>
        <li>
          <ContactCard />
        </li>
        <li>
          <ContactCard />
        </li>
        <li>
          <ContactCard />
        </li>
        <li>
          <ContactCard />
        </li>
        <li>
          <ContactCard />
        </li>
        <li>
          <ContactCard />
        </li>
        <li>
          <ContactCard />
        </li>
        <li>
          <ContactCard />
        </li>
        <li>
          <ContactCard />
        </li>
      </ul>
    </>
  );
};
