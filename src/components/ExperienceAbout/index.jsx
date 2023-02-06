import { SpanTittle, TitleAbout } from "../About/style";
import { Row } from "../AboutMore/style";
import {
  ContainerExperience,
  ContentDivExperiencei,
  H1Experience,
  H2Experience,
  HrExperience,
  Lista,
  RowExperience,
} from "./style";

function ExperienceAbout() {
  return (
    <ContainerExperience>
      <ContentDivExperiencei>
        <TitleAbout>
          <SpanTittle>/</SpanTittle> MINHA EXPERIÊNCIA
        </TitleAbout>
        <H1Experience>
          Quase 1 ano de experiência e mais de 10 projetos
        </H1Experience>
      </ContentDivExperiencei>
      <HrExperience />
      <RowExperience>
        <div>
          <H2Experience id="myTitle">CONJUNTO DE HABILIDADES</H2Experience>
          <Row>
            <div>
              <ul id="myList">
                <Lista>HTML</Lista>
                <Lista>CSS</Lista>
                <Lista>Git</Lista>
                <Lista margin="50px">JavaScript</Lista>
              </ul>
            </div>
            <div>
              <Lista>React.Js</Lista>
              <Lista>Node.JS</Lista>
              <Lista>Github</Lista>
              <Lista>Design System</Lista>
            </div>
          </Row>
        </div>
      </RowExperience>
    </ContainerExperience>
  );
}

export default ExperienceAbout;
