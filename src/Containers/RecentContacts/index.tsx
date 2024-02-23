import { SectionTitle } from "../../../styles";
import { RecentContactCard } from "../../Components/RecentContactCard/RecentContactCard";
import { RecentContactsContainer } from "./styles";

export const RecentContacts = () => {
  return (
    <>
      <SectionTitle>Contatos Recentes</SectionTitle>

      <RecentContactsContainer>
        <RecentContactCard />
        <RecentContactCard />
        <RecentContactCard />
        <RecentContactCard />
        <RecentContactCard />
        <RecentContactCard />
        <RecentContactCard />
        <RecentContactCard />
        <RecentContactCard />
        <RecentContactCard />
      </RecentContactsContainer>
    </>
  );
};
