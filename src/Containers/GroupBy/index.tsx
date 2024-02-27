import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../store"
import { getUniqueGroups } from "../../store/reducers/contacts"
import { useEffect, useState } from "react"
import { SectionForm } from "../AddContactForm/styles"
import Contact from "../../models/contact"
import { ContactCard } from "../../Components/ContactCard"

export const GroupBy = () => {
  const {language} = useSelector((state:RootReducer)=> state.language)
  const { uniqueGroups } = useSelector((state:RootReducer)=> state.contacts)
  const { contacts } = useSelector((state:RootReducer)=> state.contacts)
  const [filter, setFilter] = useState('')
  const [filteredResults, setFilteredResults] = useState<Contact[]>([])
  const handleChangeFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value.toLowerCase();
    const newFilteredResults = contacts.filter(c => c.group.toLowerCase() === value);
    setFilteredResults(newFilteredResults);
    setFilter(value); 
  };
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getUniqueGroups())  
  },[])
    return(
        <div>
          
           <SectionForm>
           <h3>
           {language === "english" && "Filter by group"}
           {language === "PT-BR" && "Filtrar por grupos"}
           </h3>
            <select
            name=""
            id=""
            value={filter}
            onChange={(e) => handleChangeFilter(e)}
            >
              {uniqueGroups.map((g, index) => (
                <option value={g} key={index}>
                  {g}
                </option>
                
              ))}
              <option value="oi"/>
            </select>
            </SectionForm>
            {filteredResults.map((f)=>(
              <li key={f.fullName}>
              <ContactCard
               fullName = {f.fullName}
               email ={f.email}
               phoneNumber = {f.phoneNumber}
               profilePictureUrl ={f.profilePictureUrl }
               id ={f.id}
               socialMedia= {f.socialMedia}
               group = {f.group}
               isFavorite = {f.isFavorite}
              />
            </li>
            ))}
        </div>
    )
}