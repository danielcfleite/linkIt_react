import { SectionTitle } from "../../../styles";
import { ContactCard } from "../../Components/ContactCard";

export const ContactList = () => {
  return (
    <>
      <SectionTitle>Lista de Contatos</SectionTitle>
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
