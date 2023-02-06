import {
  Column1,
  Column2,
  Column4,
  Column5,
  ContainerFooter,
  ContainerRedes2,
  H1,
  H2,
  HrFooter,
  Imagem,
  PCopy,
  PEmail,
  PFooter,
  PNavFooter,
  PNumero,
  Row1,
  Row2,
  Row3,
  Row4,
  Row5,
  Span,
  StyledLink2,
} from "./style";
import avatar from "../../assets/173555291_754068319339729_735938098371077328_n.jpg";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import {
  goToContato,
  goToHome,
  goToProjetos,
  goToSobre,
} from "../../routes/coordinator";

function Footer() {
  const navigate = useNavigate();
  return (
    <ContainerFooter>
      <Row1>
        <Row2>
          <Imagem src={avatar}></Imagem>
          <Column1>
            <H2>Matheus Freitas</H2>
            <PFooter>Desenvolvedor Front-end</PFooter>
            <ContainerRedes2>
              <StyledLink2
                href="https://www.linkedin.com/in/matheus-freitas-1651a918a/"
                target={"_blank"}
              >
                <AiFillLinkedin size={30} />
              </StyledLink2>
              <StyledLink2
                href="https://github.com/Matheusbcy"
                target={"_blank"}
              >
                <AiFillGithub size={30} />
              </StyledLink2>
              <StyledLink2
                href="https://www.facebook.com/profile.php?id=100004409193849"
                target={"_blank"}
              >
                <AiFillFacebook size={30} />
              </StyledLink2>
              <StyledLink2
                href="https://twitter.com/Matheusbcy"
                target={"_blank"}
              >
                <AiFillTwitterSquare size={30} />
              </StyledLink2>
              <StyledLink2
                href="https://www.instagram.com/matheus_ss13/"
                target={"_blank"}
              >
                <AiFillInstagram size={30} />
              </StyledLink2>
            </ContainerRedes2>
          </Column1>
        </Row2>
        <Column2>
          <H1>
          entre em contato <Span>➡</Span>
          </H1>
          <Row3>
            <Column5>
              <PEmail>EMAIL ME:</PEmail>
              <PNumero>Matheusbcy@gmail.com</PNumero>
            </Column5>
            <Column4>
              <PEmail>CALL ME:</PEmail>
              <PNumero>(xx)X-xxxx-xxxx</PNumero>
            </Column4>
          </Row3>
        </Column2>
      </Row1>
      <HrFooter />
      <Row4>
        <Row5>
          <PNavFooter onClick={() => goToHome(navigate)}>Home</PNavFooter>
          <PNavFooter onClick={() => goToSobre(navigate)}>Sobre</PNavFooter>
          <PNavFooter onClick={() => goToProjetos(navigate)}>
            Projetos
          </PNavFooter>
          <PNavFooter onClick={() => goToContato(navigate)}>Contato</PNavFooter>
        </Row5>
        <PCopy>Copyright © Matheus Freitas | Powered by Matheus Freitas</PCopy>
      </Row4>
    </ContainerFooter>
  );
}

export default Footer;
