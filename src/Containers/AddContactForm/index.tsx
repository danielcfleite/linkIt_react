import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import { SectionTitle } from "../../../styles";
import { SectionForm, SocialMediaContainer, SubmitButton } from "./styles";
import { MdPeople } from "react-icons/md";
import { useState } from "react";
import { FocusEvent } from "react";

export const AddContactForm = () => {
    const [focused, setFocused] = useState('')
    const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
        setFocused(e.target.name)
    }

    const isSelected = (inputName: string) => {
        return focused === inputName;
    };
    return (
        <form>
            <div>
                <SectionTitle>Dados Pessoais</SectionTitle>
                <SectionForm >
                    <input type="text" name="contactName" id="contactName" placeholder="Nome Completo" />
                    <input type="email" name="email" id="email" placeholder="exemplo@gmail.com" />
                    <input type="tel" name="phoneNumber" id="phoneNumber" placeholder="(12)12345-6789" />
                    <input type="text" name="contactName" id="contactName" placeholder="URL da foto de perfil: https://" />

                </SectionForm>
            </div>

            <div>
                <SectionTitle>Redes sociais</SectionTitle>
                <SocialMediaContainer selected={isSelected("instagram")}>
                    <span>
                    <FaInstagram />
                    </span>
                    <input type="text" placeholder="@handle" name="instagram" onFocus={handleFocus}/>
                </SocialMediaContainer>
            </div>

            <SocialMediaContainer selected={isSelected("tiktok")}>
                <FaTiktok />
                <input type="text" placeholder="@handle" name="tiktok" onFocus={handleFocus} />
            </SocialMediaContainer>

            <SocialMediaContainer selected={isSelected("linkedin")}>
                <FaLinkedin />
                <input type="text" name="linkedin" placeholder="@handle" onFocus={handleFocus}/>
            </SocialMediaContainer >

            <SocialMediaContainer selected={isSelected("github")}>
                <FaGithub />
                <input type="text"  name="github" placeholder="/user" onFocus={handleFocus}/>
            </SocialMediaContainer>

            <SocialMediaContainer selected={isSelected("facebook")}>
                <FaFacebook />
                <input type="text" name="facebook" placeholder="/user" onFocus={handleFocus}/>
            </SocialMediaContainer>

            <div>
                <SectionTitle>Categoria</SectionTitle>
                <SectionForm select>
                <select id="select-group">
                    <option value="none"></option>
                    <option value="família">Família</option>
                    <option value="amigos">Amigos</option>
                </select>
                </SectionForm>
            </div>
            

            <SubmitButton type="submit">Cadastrar <MdPeople size={20}/></SubmitButton>
        </form>
    );
};
