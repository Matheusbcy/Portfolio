import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { goToSobre } from "../../routes/coordinator";
import {
  AboutContainer,
  Button,
  ContainerQtdProjec,
  ContainerRigth,
  H1,
  H2,
  HrF,
  HrMoreAbout,
  P,
  SpanNumber,
  SpanTittle,
  StyledBox,
  TitleAbout,
  WrapperAboutMore,
} from "./style";

function About() {
  const navigate = useNavigate();
  return (
    <AboutContainer>
      <StyledBox display="inline-flex">
        <div>
          <TitleAbout>
            <SpanTittle>/</SpanTittle> Sobre mim
          </TitleAbout>
          <H1>Desenvolvendo websites desde 2022</H1>
          <H2>
            Desde 2022, venho me aprimorando na arte de desenvolver sites,
            buscando sempre estar atualizado com as últimas tendências e
            tecnologias do mercado. Com minha experiência e conhecimento, tenho
            a capacidade de criar sites incríveis, que sejam atraentes,
            funcionais e fáceis de usar. Em meu portfólio, você poderá ver
            alguns dos meus projetos mais recentes, que demonstram minhas
            habilidades e paixão pelo desenvolvimento web. Estou sempre em busca
            de novos desafios e oportunidades para expandir meus conhecimentos e
            habilidades, e estou ansioso para trabalhar em projetos que me
            desafiam e me permitem crescer como desenvolvedor.
          </H2>
          <WrapperAboutMore>
            <Button onClick={() => goToSobre(navigate)}>
              Mais sobre mim ➡
            </Button>
            <HrMoreAbout />
          </WrapperAboutMore>
        </div>
        <ContainerRigth>
          <Box display="inline-flex" alignItems="center" width="500px">
            <SpanNumber>1</SpanNumber>
            <P>Ano de experiência</P>
            <ContainerQtdProjec>
              <SpanNumber>10 </SpanNumber>
              <P>Projetos Feitos</P>
            </ContainerQtdProjec>
          </Box>
          <H2>
            Com 1 ano de experiência como desenvolvedor web, tenho trabalhado
            duro para adquirir habilidades e conhecimentos valiosos que me
            permitiram criar projetos incríveis. Até agora, tenho desenvolvido
            cerca de 10 projetos diferentes, cada um desafiando-me a aprender e
            evoluir minhas habilidades. Meus projetos incluem tanto projetos
            pessoais quanto projetos relacionado a cursos que faço, e estou
            muito orgulhoso de tudo o que tenho conseguido realizar em meu
            primeiro ano como desenvolvedor. Estou animado para continuar
            crescendo e adquirindo novas habilidades para desenvolver projetos
            ainda melhores no futuro.
          </H2>
        </ContainerRigth>
      </StyledBox>
      <div display="inline-flex">
        <HrF />
      </div>
    </AboutContainer>
  );
}

export default About;
