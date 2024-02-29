import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import { SectionTitle } from "../../../styles";
import { Button, SectionForm, SocialMediaContainer } from "./styles";
import { MdPeople } from "react-icons/md";
import { FormEvent, useState } from "react";
import { FocusEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";
import { createContact } from "../../store/reducers/contacts";
import { v4 as uuidv4 } from 'uuid'; //

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

export const AddContactForm = () => {
    const [focused, setFocused] = useState('')
    const dispatch = useDispatch()
    const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
        setFocused(e.target.name)
    }
    const {language} = useSelector((state:RootReducer)=> state.language)
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

    const createUser = (e:FormEvent) => {
        e.preventDefault()
        const userId = uuidv4();
        const groupToBeUsed = () => {
            if(formData.groupName !== ""){
                return formData.groupName
            } else {
                return selectedGroup
            }
        }
        const socialMediasforUser = {
            linkedin: SocialMediaData.linkedin,
            instagram: SocialMediaData.instagram,
            github: SocialMediaData.github,
            tiktok: SocialMediaData.tiktok,
            facebook:  SocialMediaData.facebook
        }
        const userToCreate = {
            fullName: formData.fullName ,
            email: formData.email ,
            phoneNumber: formData.phoneNumber ,
            profilePictureUrl: formData.profilePictureUrl ,
            id: userId,
            socialMedia: socialMediasforUser,
            group: groupToBeUsed() || '',
            isFavorite: false,
        }
        dispatch(createContact(userToCreate))
    }


    return (
        <form onSubmit={createUser}>
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
                    required
                    placeholder={
                        language === "english" ? "Full Name" : "Nome Completo"
                    }
                    onChange={handleInputChange}
                    />
                    <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder={
                        language === "english" ? "example@gmail.com" : "exemplo@gmail.com"
                        
                    }
                    required
                    onChange={handleInputChange}
                    />
                    <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder={
                        language === "english" ? "(12)12345-6789" : "(12)12345-6789"
                    }
                    onChange={handleInputChange}
                    required
                    />
                    <input
                    type="text"
                    name="profilePictureUrl"
                    id="profilePictureUrl"
                    placeholder={
                        language === "english"
                        ? "Profile Picture URL: https://"
                        : "URL da foto de perfil: https://"
                    }
                    onChange={handleInputChange}
                    required
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
                    <input type="text" placeholder="@handle" name="instagram" onFocus={handleFocus}
                    onChange={handleInputSocialMediaChange}/>
                </SocialMediaContainer>
            </div>

            <SocialMediaContainer selected={isSelected("tiktok")}>
                <FaTiktok />
                <input type="text" placeholder="@handle" name="tiktok" onFocus={handleFocus} 
                onChange={handleInputSocialMediaChange}/>
            </SocialMediaContainer>

            <SocialMediaContainer selected={isSelected("linkedin")}>
                <FaLinkedin />
                <input type="text" name="linkedin" placeholder="@handle" onFocus={handleFocus}
                onChange={handleInputSocialMediaChange}/>
            </SocialMediaContainer >

            <SocialMediaContainer selected={isSelected("github")}>
                <FaGithub />
                <input type="text"  name="github" placeholder="/user" onFocus={handleFocus}
                onChange={handleInputSocialMediaChange}/>
            </SocialMediaContainer>

            <SocialMediaContainer selected={isSelected("facebook")}>
                <FaFacebook />
                <input type="text" name="facebook" placeholder="/user" onFocus={handleFocus}
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
    );
};
