import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa"
import { SectionTitle } from "../../../styles"
import { MdPeople } from "react-icons/md";
import { FormEvent, useState } from "react";
import { FocusEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";
import { Button, SectionForm, SocialMediaContainer } from "../AddContactForm/styles";
import { updateContact } from "../../store/reducers/contacts";



interface FormData {
    fullName: string;
    email: string;
    phoneNumber: string;
    profilePictureUrl: string;
    id: number;
    socialMedia: string;
    isFavorite: boolean;
    groupName?: string;
  }

  interface SocialMediaData {
    linkedin: string;
    instagram: string;
    github: string;
    tiktok: string;
    facebook: string;
  }

export const EditForm = ({ id }: { id: string }) => {
const {language} = useSelector((state:RootReducer)=> state.language)
const {contacts} = useSelector((state:RootReducer)=> state.contacts)
const user = contacts.find((c)=> c.id === id)
const { email, fullName,  isFavorite, phoneNumber, profilePictureUrl } = user!;
const {facebook,github,instagram,linkedin,tiktok} = user!.socialMedia
const [focused, setFocused] = useState('')
const dispatch = useDispatch()
const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    setFocused(e.target.name)
}
const isSelected = (inputName: string) => {
    return focused === inputName;
};
const [willCreateGroup, setWillCreateGroup] = useState(false)
const [selectedGroup, setSelectedGroup] = useState('')
const [SocialMediaData, setSocialMediaData] = useState<SocialMediaData>({
    linkedin: ""  ,
    instagram: "",
    github: "",
    tiktok: "",
    facebook: "",
})

const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phoneNumber: "",
    profilePictureUrl: "",
    id: 0,
    socialMedia: "",
    groupName: "",
    isFavorite: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
     
    }));
  };

  const handleSetWillCreateGroup = () => {
        setFormData((prevData) => ({
            ...prevData, 
            groupName: "", 
        }));
        setSelectedGroup('')
    setWillCreateGroup(!willCreateGroup)
  }

  const handleInputSocialMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSocialMediaData((prevData) => ({
      ...prevData,
      [name]: value,
     
    }));
  };

  const updateUser = (e: FormEvent) => {
    e.preventDefault();

    const updatedUser = {
        ...user,
        id,
        fullName: formData.fullName !== "" ? formData.fullName : user!.fullName,
        email: formData.email !== "" ? formData.email : user!.email,
        phoneNumber: formData.phoneNumber !== "" ? formData.phoneNumber : user!.phoneNumber,
        profilePictureUrl: formData.profilePictureUrl !== "" ? formData.profilePictureUrl : user!.profilePictureUrl,
        socialMedia: {
            linkedin: SocialMediaData.linkedin !== "" ? SocialMediaData.linkedin : user!.socialMedia.linkedin,
            instagram: SocialMediaData.instagram !== "" ? SocialMediaData.instagram : user!.socialMedia.instagram,
            github: SocialMediaData.github !== "" ? SocialMediaData.github : user!.socialMedia.github,
            tiktok: SocialMediaData.tiktok !== "" ? SocialMediaData.tiktok : user!.socialMedia.tiktok,
            facebook: SocialMediaData.facebook !== "" ? SocialMediaData.facebook : user!.socialMedia.facebook
        },
        group: (formData.groupName !== "" ? formData.groupName : selectedGroup) || user!.group as string,
        isFavorite,
    };


    dispatch(updateContact(updatedUser));
};
    return (
        <>
        {console.log(user)}
        <form onSubmit={updateUser}>
            <div>
                <SectionTitle>
                {language === "english" && "Personal Data"}
          {language === "PT-BR" && "Dados Pessoais"}
                    
                    </SectionTitle>
                <SectionForm >
                                    <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    
                    placeholder={fullName}
                    onChange={handleInputChange}
                    />
                    <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder= {email}
                    
                    onChange={handleInputChange}
                    />
                    <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder={phoneNumber}
                    onChange={handleInputChange}
                    
                    />
                    <input
                    type="text"
                    name="profilePictureUrl"
                    id="profilePictureUrl"
                    placeholder={profilePictureUrl}
                    onChange={handleInputChange}
                    
                    />

                </SectionForm>
            </div>

            <div>
                <SectionTitle>
                {language === "english" && "Social Media"}
                {language === "PT-BR" && "Redes sociais"}
                    </SectionTitle>
                <SocialMediaContainer selected={isSelected("instagram")}>
                    <span>
                    <FaInstagram />
                    </span>
                    <input type="text" placeholder={instagram} name="instagram" onFocus={handleFocus}
                    onChange={handleInputSocialMediaChange}/>
                </SocialMediaContainer>
            </div>

            <SocialMediaContainer selected={isSelected("tiktok")}>
                <FaTiktok />
                <input type="text" placeholder={tiktok} name="tiktok" onFocus={handleFocus} 
                onChange={handleInputSocialMediaChange}/>
            </SocialMediaContainer>

            <SocialMediaContainer selected={isSelected("linkedin")}>
                <FaLinkedin />
                <input type="text" name="linkedin" placeholder={linkedin} onFocus={handleFocus}
                onChange={handleInputSocialMediaChange}/>
            </SocialMediaContainer >

            <SocialMediaContainer selected={isSelected("github")}>
                <FaGithub />
                <input type="text"  name="github" placeholder={github} onFocus={handleFocus}
                onChange={handleInputSocialMediaChange}/>
            </SocialMediaContainer>

            <SocialMediaContainer selected={isSelected("facebook")}>
                <FaFacebook />
                <input type="text" name="facebook" placeholder={facebook} onFocus={handleFocus}
                onChange={handleInputSocialMediaChange}/>
            </SocialMediaContainer>

            <div>
                <SectionTitle>   {language === "english" && "Groups"}
                {language === "PT-BR" && "Categorias"}</SectionTitle>
               
                <SectionForm select>
                {!willCreateGroup &&
                <select id="select-group"
                value={selectedGroup}
                onChange={(e)=> setSelectedGroup(e.target.value)}
                >
                    <option value="none"></option>
                    <option value="família">Família</option>
                    <option value="amigos">Amigos</option>
                </select>
            }

<Button type="button" onClick={() =>  handleSetWillCreateGroup() }>
  {willCreateGroup ? (
    <>
      {language === "english" && "Select Category"}
      {language === "PT-BR" && "Selecionar Categoria"}
    </>
  ) : (
    <>
      {language === "english" && "Create new Group"}
      {language === "PT-BR" && "Criar Categoria"}
    </>
  )}
</Button>

                </SectionForm>
            </div>

            {willCreateGroup &&
            <div>
                
            <SectionTitle>  
                {language === "english" && "Create Group"}
                {language === "PT-BR" && "Criar Categoria"}
                </SectionTitle>
              <SectionForm>
              <input
                    type="text"
                    name="groupName"
                    id="groupName"
                    placeholder={
                        language === "english" ? "Group Name" : "Nome da categoria"
                    }
                    onChange={handleInputChange}
                    />
              </SectionForm>
            </div>
            }

            <Button type="submit">                
            {language === "english" && "Add"}
                {language === "PT-BR" && "Cadastrar"}
                <MdPeople size={20}/></Button>
        </form>
        </>
    )
}

