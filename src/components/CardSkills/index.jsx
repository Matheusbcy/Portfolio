import React from "react";
import {
  ContainerCard,
  ContainerInfoCard,
  P,
  SpanIcon,
  TitleCardSkills,
} from "./style";
import { IoLogoJavascript } from "react-icons/io";
import { GalleryCard } from "../Skills/style";
import { FaReact } from "react-icons/fa";
import { SiHtml5 } from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { BiGitBranch } from "react-icons/bi";
import { SiStyledcomponents } from "react-icons/si";
import { SiMaterialui } from "react-icons/si";

function CardSkills() {
  return (
    <GalleryCard>
      <ContainerCard>
        <ContainerInfoCard>
          <SpanIcon>
            <SiHtml5
              size={60}
              style={{ borderRadius: "49%", backgroundColor: "#075FE4" }}
            />
          </SpanIcon>
          <TitleCardSkills>HTML & CSS</TitleCardSkills>
          <P>
            O HTML fornece a estrutura básica para o conteúdo, enquanto o CSS é
            usado para controlar como esse conteúdo é apresentado ao usuário
            final.
          </P>
        </ContainerInfoCard>
      </ContainerCard>
      <ContainerCard>
        <ContainerInfoCard>
          <SpanIcon>
            <IoLogoJavascript
              size={60}
              style={{ borderRadius: "49%", backgroundColor: "#075FE4" }}
            />
          </SpanIcon>
          <TitleCardSkills>Javascript</TitleCardSkills>
          <P>
            JavaScript é uma linguagem de programação que permite adicionar
            interatividade e comportamentos dinâmicos a páginas web. Ele é usado
            para criar efeitos visuais, validar formulários, criar aplicativos e
            muito mais.
          </P>
        </ContainerInfoCard>
      </ContainerCard>
      <ContainerCard>
        <ContainerInfoCard>
          <SpanIcon>
            <FaReact
              size={60}
              style={{ borderRadius: "49%", backgroundColor: "#075FE4" }}
            />
          </SpanIcon>
          <TitleCardSkills>React Js</TitleCardSkills>
          <P>
            React é uma biblioteca JavaScript para desenvolvimento de interfaces
            de usuário. Ele permite criar componentes reutilizáveis e gerenciar
            o estado da aplicação de forma eficiente.
          </P>
        </ContainerInfoCard>
      </ContainerCard>
      <ContainerCard>
        <ContainerInfoCard>
          <SpanIcon>
            <BsFillBootstrapFill
              size={60}
              style={{ borderRadius: "49%", backgroundColor: "#075FE4" }}
            />
          </SpanIcon>
          <TitleCardSkills>Bootstrap</TitleCardSkills>
          <P>
            Bootstrap é um framework front-end que fornece uma série de
            ferramentas e componentes para desenvolvimento de sites e
            aplicativos web.
          </P>
        </ContainerInfoCard>
      </ContainerCard>
      <ContainerCard>
        <ContainerInfoCard>
          <SpanIcon>
            <AiFillGithub
              size={60}
              style={{ borderRadius: "49%", backgroundColor: "#075FE4" }}
            />
          </SpanIcon>
          <TitleCardSkills>GitHub</TitleCardSkills>
          <P>
            GitHub é uma plataforma de desenvolvimento de software que permite
            aos desenvolvedores armazenar, gerenciar e colaborar em projetos de
            código-fonte usando o Git.
          </P>
        </ContainerInfoCard>
      </ContainerCard>
      <ContainerCard>
        <ContainerInfoCard>
          <SpanIcon>
            <BiGitBranch
              size={60}
              style={{ borderRadius: "49%", backgroundColor: "#075FE4" }}
            />
          </SpanIcon>
          <TitleCardSkills>Git</TitleCardSkills>
          <P>
            Git é um sistema de controle de versão distribuído que permite aos
            desenvolvedores rastrear alterações no código-fonte de um projeto e
            colaborar facilmente em equipe.
          </P>
        </ContainerInfoCard>
      </ContainerCard>
      <ContainerCard>
        <ContainerInfoCard>
          <SpanIcon>
            <SiStyledcomponents
              size={60}
              style={{ borderRadius: "49%", backgroundColor: "#075FE4" }}
            />
          </SpanIcon>
          <TitleCardSkills>Styled Components</TitleCardSkills>
          <P>
            Styled Components é uma biblioteca JavaScript que permite a criação
            de componentes CSS personalizados dentro do próprio código
            JavaScript.
          </P>
        </ContainerInfoCard>
      </ContainerCard>
      <ContainerCard>
        <ContainerInfoCard>
          <SpanIcon>
            <SiMaterialui
              size={60}
              style={{ borderRadius: "49%", backgroundColor: "#075FE4" }}
            />
          </SpanIcon>
          <TitleCardSkills>Material Ui</TitleCardSkills>
          <P>
            Material UI é uma biblioteca de componentes React que segue os
            princípios do Material Design, um guia de estilo criado pela Google
            para aplicações móveis e web.
          </P>
        </ContainerInfoCard>
      </ContainerCard>
    </GalleryCard>
  );
}

export default CardSkills;
