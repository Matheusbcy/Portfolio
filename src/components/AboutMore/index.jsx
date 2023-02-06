import {
  Column,
  ContainerAboutMore,
  H1AboutMore,
  HrAboutMore,
  ImagemAbout,
  PAboutMore,
  Row,
} from "./style";
import avatar from "../../assets/WhatsApp Image 2023-02-02 at 18.42.12.jpeg";

function AboutMore() {
  return (
    <ContainerAboutMore>
      <Row>
        <Column>
          <HrAboutMore />
          <H1AboutMore>Muito prazer, me chamo Matheus Freitas</H1AboutMore>
          <PAboutMore>
            Olá, é um prazer conhecê-lo! Meu nome é Matheus Freitas e sou
            desenvolvedor front-end. Com paixão pelo design e pelo
            desenvolvimento web, eu me esforço para criar experiências
            interativas e atraentes para os usuários. Com meses de experiência
            em HTML, CSS e JavaScript, posso transformar ideias em realidade na
            web. Estou sempre procurando por novos desafios e oportunidades para
            crescer e aperfeiçoar minhas habilidades. Estou ansioso para
            conectar e trabalhar com você.
          </PAboutMore>
        </Column>
        <ImagemAbout src={avatar} />
      </Row>
    </ContainerAboutMore>
  );
}

export default AboutMore;
