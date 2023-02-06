import {
  AbuotContent,
  AppMain,
  Button,
  ContainerRedes,
  Content,
  FollowContent,
  Hr,
  HrAbout,
  HrWork,
  ImagemAvatar,
  MainContent,
  P,
  StyledLink,
  SubTitle,
  Tittle,
  WorkContent,
  Wrapper,
  WrapperWork,
} from "./style";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import avatar from "../../assets/WhatsApp Image 2023-02-02 at 18.42.12.jpeg";
import { useNavigate } from "react-router-dom";
import { goToProjetos, goToSobre } from "../../routes/coordinator";
import { StyledDiv } from "../About/style";

function MainHome() {
  const navigate = useNavigate();
  return (
    <AppMain style={{ backgroundColor: "#1B1F24" }}>
      <MainContent>
        <StyledDiv>
          <div>
            <ImagemAvatar src={avatar} alt="" />
          </div>
          <Tittle>Eu sou Matheus, um Desenvolvedor Front-End</Tittle>
        </StyledDiv>

        <Content>
          <AbuotContent>
            <SubTitle>SOBRE MIM</SubTitle>
            <P>
              Sou Matheus, um desenvolvedor web apaixonado que se dedica a
              aprender e aperfeiçoar minhas habilidades para criar projetos
              incríveis. Além do desenvolvimento, também gosto de me envolver
              com outras áreas relacionadas. Fora do trabalho, gosto de passar
              meu tempo livre praticando esportes.
            </P>
            <Wrapper>
              <Button onClick={() => goToSobre(navigate)}>Saber mais ➡</Button>
              <HrAbout />
            </Wrapper>
          </AbuotContent>
          <Hr />
          <WorkContent>
            <SubTitle>MEUS PROJETOS</SubTitle>
            <P>
              Meus projetos são uma reflexão de minhas habilidades e paixão como
              desenvolvedor web. Tenho trabalhado em vários projetos diferentes,
              desde landing pages até site que consomem APIS. Cada projeto é uma
              oportunidade para aprender e evoluir minhas habilidades, e estou
              sempre em busca de novos desafios e oportunidades para me
              desenvolver.
            </P>
            <WrapperWork>
              <Button onClick={() => goToProjetos(navigate)}>Projetos ➡</Button>
              <HrWork />
            </WrapperWork>
          </WorkContent>
          <Hr />
          <FollowContent>
            <SubTitle>ME SIGA :)</SubTitle>
            <ContainerRedes>
              <StyledLink
                href="https://www.linkedin.com/in/matheus-freitas-1651a918a/"
                target={"_blank"}
              >
                <AiFillLinkedin size={50} />
              </StyledLink>
              <StyledLink
                href="https://github.com/Matheusbcy"
                target={"_blank"}
              >
                <AiFillGithub size={50} />
              </StyledLink>
              <StyledLink
                href="https://www.facebook.com/profile.php?id=100004409193849"
                target={"_blank"}
              >
                <AiFillFacebook size={50} />
              </StyledLink>
              <StyledLink
                href="https://twitter.com/Matheusbcy"
                target={"_blank"}
              >
                <AiFillTwitterSquare size={50} />
              </StyledLink>
              <StyledLink
                href="https://www.instagram.com/matheus_ss13/"
                target={"_blank"}
              >
                <AiFillInstagram size={50} />
              </StyledLink>
            </ContainerRedes>
          </FollowContent>
        </Content>
      </MainContent>
    </AppMain>
  );
}
export default MainHome;
