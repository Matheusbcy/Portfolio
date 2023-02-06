import { Box } from "@mui/system";
import { useState } from "react";
import { Button, HrMoreAbout, WrapperAboutMore } from "../About/style";
import { SpanSkill, TitleSkill } from "../Skills/style";
import {
  ButtonLink,
  Card,
  CardsProject,
  CardStack,
  ContentDiv,
  ContentImage,
  ContentLinks,
  ContentProject,
  LinkR,
  P,
  StyledBox,
  StyledDivProject,
  TitleMaior2,
  TitlePrincipal,
} from "./style";
import imagem from "../../assets/Screenshot_1.png";
import imagem2 from "../../assets/pokemonProjeto1.png";
import imagem3 from "../../assets/ecommerce.png";
import { goToProjetos } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

function Projetos() {
  const navigate = useNavigate();
  const [activeCard, setActiveCard] = useState(null);

  return (
    <ContentProject>
      <StyledBox mt={7}>
        <StyledDivProject>
          <TitleSkill>
            <SpanSkill>/</SpanSkill> MEU PORTFOLIO
          </TitleSkill>
          <Box mt={3}>
            <TitleMaior2>
              Dê uma olhada nos mais importantes projetos que fiz.
            </TitleMaior2>
          </Box>
          <WrapperAboutMore>
            <Button onClick={() => goToProjetos(navigate)}>
              todos os projetos ➡
            </Button>
            <HrMoreAbout />
          </WrapperAboutMore>
        </StyledDivProject>
      </StyledBox>
      <CardsProject style={{ overflow: "visible" }}>
        <Card
          id={1}
          isActive={activeCard === 1}
          onMouseEnter={() => setActiveCard(1)}
          onMouseLeave={() => setActiveCard(null)}
        >
          <CardStack>
            <P>javascript</P>
            <P>ReactJs</P>
            <P>Styled</P>
            <P>Restful API</P>
          </CardStack>
          <ContentDiv>
            <TitlePrincipal>PokeApi</TitlePrincipal>
            <TitlePrincipal>
              Website consumindo APi publica de pokémon
            </TitlePrincipal>
          </ContentDiv>
          <ContentLinks>
            <LinkR
              href="https://github.com/Matheusbcy/projeto-react-apis"
              target={"_blank"}
            >
              <ButtonLink color="#5D6C83">Repositorio</ButtonLink>
            </LinkR>
            <LinkR href="https://pokemon-app-react.surge.sh/" target={"_blank"}>
              <ButtonLink color="#075FE4">Site</ButtonLink>
            </LinkR>
          </ContentLinks>
          <ContentImage image={imagem}></ContentImage>
        </Card>
        <Card
          id={2}
          isActive={activeCard === 2}
          onMouseEnter={() => setActiveCard(2)}
          onMouseLeave={() => setActiveCard(null)}
        >
          <CardStack>
            <P>javascript</P>
            <P>HTML5</P>
            <P>CSS3</P>
          </CardStack>
          <ContentDiv>
            <TitlePrincipal>Pokémon Dados</TitlePrincipal>
            <TitlePrincipal>Website sobre pokémons</TitlePrincipal>
          </ContentDiv>
          <ContentLinks>
            <LinkR
              href="https://github.com/Matheusbcy/projeto-intro-web"
              target={"_blank"}
            >
              <ButtonLink margin="40px" color="#5D6C83">
                Repositorio
              </ButtonLink>
            </LinkR>
            <LinkR href="https://gamy-paint.surge.sh/" target={"_blank"}>
              <ButtonLink margin="40px" color="#075FE4">
                Site
              </ButtonLink>
            </LinkR>
          </ContentLinks>
          <ContentImage image={imagem2}></ContentImage>
        </Card>
        <Card
          id={3}
          isActive={activeCard === 3}
          onMouseEnter={() => setActiveCard(3)}
          onMouseLeave={() => setActiveCard(null)}
        >
          <CardStack>
            <P>React.js</P>
            <P>Styled</P>
            <P>Bootstrap</P>
            <P>Javascript</P>
          </CardStack>
          <ContentDiv>
            <TitlePrincipal>Universo em Detalhes</TitlePrincipal>
            <TitlePrincipal>E-commerce de roupas</TitlePrincipal>
          </ContentDiv>
          <ContentLinks>
            <LinkR
              href="https://github.com/Matheusbcy/projeto-frontendreact"
              target={"_blank"}
            >
              <ButtonLink margin="40px" color="#5D6C83">
                Repositorio
              </ButtonLink>
            </LinkR>
            <LinkR
              href="https://deploy-preview-1--magnificent-mochi-fa70f6.netlify.app/"
              target={"_blank"}
            >
              <ButtonLink margin="40px" color="#075FE4">
                Site
              </ButtonLink>
            </LinkR>
          </ContentLinks>
          <ContentImage image={imagem3}></ContentImage>
        </Card>
      </CardsProject>
    </ContentProject>
  );
}

export default Projetos;
