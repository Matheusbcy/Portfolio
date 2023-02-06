import * as Atom from "./style";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { StyledLink } from "../MainHome/style";
import { useState } from "react";
import axios from "axios";

function ContatoComp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    assunto: "",
    message: "",
  });

  const onChangeInputs = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleClick = async (event) => {
    event.preventDefault();
  };
  return (
    <Atom.ContainerContato>
      <h1>Pagina em Contrução</h1>
      {/* <Atom.TitleContact>Vamos trabalhar juntos</Atom.TitleContact>
      <Atom.PContact>Entre em contato comigo</Atom.PContact>
      <Atom.ContainerRedesContact>
        <StyledLink
          href="https://www.linkedin.com/in/matheus-freitas-1651a918a/"
          target={"_blank"}
        >
          <AiFillLinkedin size={50} />
        </StyledLink>
        <StyledLink href="https://github.com/Matheusbcy" target={"_blank"}>
          <AiFillGithub size={50} />
        </StyledLink>
        <StyledLink
          href="https://www.facebook.com/profile.php?id=100004409193849"
          target={"_blank"}
        >
          <AiFillFacebook size={50} />
        </StyledLink>
        <StyledLink href="https://twitter.com/Matheusbcy" target={"_blank"}>
          <AiFillTwitterSquare size={50} />
        </StyledLink>
        <StyledLink
          href="https://www.instagram.com/matheus_ss13/"
          target={"_blank"}
        >
          <AiFillInstagram size={50} />
        </StyledLink>
      </Atom.ContainerRedesContact>
      <Atom.ContainerForm>
        <Atom.Form>
          <Atom.Label for="name">Nome:</Atom.Label>
          <Atom.Input
            type="text"
            id="name"
            name="name"
            onChange={onChangeInputs}
          />

          <Atom.Label for="email">Email:</Atom.Label>
          <Atom.Input
            type="email"
            id="email"
            name="email"
            onChange={onChangeInputs}
          />
          <Atom.Label for="email">Assunto:</Atom.Label>
          <Atom.Input
            type="text"
            id="assunto"
            name="assunto"
            onChange={onChangeInputs}
          />

          <Atom.Label for="message">Mensagem:</Atom.Label>
          <Atom.TextArea
            id="message"
            name="message"
            onChange={onChangeInputs}
          ></Atom.TextArea>

          <Atom.Submit
            type="submit"
            value="Enviar email"
            onClick={handleClick}
          />
        </Atom.Form>
      </Atom.ContainerForm> */}
    </Atom.ContainerContato>
  );
}

export default ContatoComp;
