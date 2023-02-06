import { SpanTittle, TitleAbout } from "../About/style";
import { H1Experience, H2Experience } from "../ExperienceAbout/style";
import {
  ContainerEducation,
  ContainerFormacao,
  Experience1,
  H1Education,
  HrEducation,
  PEducation,
} from "./style";

function Formacao() {
  return (
    <ContainerFormacao>
      <ContainerEducation>
        <div>
          <TitleAbout>
            <SpanTittle>/</SpanTittle> MINHA EXPERIÊNCIA
          </TitleAbout>
          <H1Experience>Formação</H1Experience>
        </div>
      </ContainerEducation>
      <HrEducation />
      <Experience1>
        <H2Experience>
          Instituto Federal de Educação, Ciência e Tecnologia do Ceará{" "}
          <SpanTittle> / </SpanTittle> MAR 2017
        </H2Experience>
        <H1Education>Tecnologia em Mecatrônica Industrial</H1Education>
        <PEducation>
          Curso focado em programação, eletrônica, elétrica, mecânica.
          Habilidades e experiencias que exercitam lógica de programação e
          conhecimento em C++, língua principal do curso. Com conhecimentos de
          C++, elétrica e a eletrônica, realizei projetos de robótica, um
          exemplo é o projeto de movimentação de um protótipo de robô do tipo
          scara.
        </PEducation>
      </Experience1>
      <Experience1>
        <H2Experience>
          Labenu
          <SpanTittle> / </SpanTittle> JUN 2022
        </H2Experience>
        <H1Education>Bootcamp de desenvolvimento web full-stack</H1Education>
        <PEducation>
          Programa com mais de 1000 horas de experiência prática em
          desenvolvimento Full-stack, guiadas por metodologias ágeis
          (Kanban/Scrum). Habilidades aprendidas: HTML, CSS, JavaScript, React,
          Styled Components, React Hooks, REST, Api Restful, HTTP, Jest,
          Node.JS, Knex, TypeScript, MySQL, AWS, SQL, Git, Github, Firebase,
          Testes unitários e UI Design.
        </PEducation>
      </Experience1>
    </ContainerFormacao>
  );
}

export default Formacao;
