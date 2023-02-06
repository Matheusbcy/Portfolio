import { Row } from "../AboutMore/style";
import {
  ContainerMyStory,
  DivMyStory,
  DivMyStory2,
  H1Story,
  ImagemMyStory,
  ImagemMyStory2,
  PStory,
} from "./style";
import imagem1 from "../../assets/walling-e_MdMMKrgdY-unsplash.jpg";
import imagem2 from "../../assets/safar-safarov-koOdUvfGr4c-unsplash.jpg";

import { SpanTittle, TitleAbout } from "../About/style";

function MyStory() {
  return (
    <ContainerMyStory>
      <Row>
        <ImagemMyStory src={imagem1} alt="" />
        <DivMyStory>
          <H1Story>
            <TitleAbout>
              <SpanTittle>/</SpanTittle> Minha Historia
            </TitleAbout>
            Como começei como Desenvolvedor
          </H1Story>
          <PStory>
            Comecei minha jornada como desenvolvedor após descobrir a paixão por
            resolver problemas e criar soluções por meio da programação.
          </PStory>
        </DivMyStory>
      </Row>
      <div>
        <ImagemMyStory2 src={imagem2} alt="" />
      </div>
      <DivMyStory2>
        <H1Story>
          <TitleAbout>
            <SpanTittle>/</SpanTittle> Minha Historia
          </TitleAbout>
          Meu primeiro site em 2019
        </H1Story>
        <PStory>
          Em 2019, tive a oportunidade de criar meu primeiro site e foi uma
          experiência incrível. Embora eu tenha parado de estudar sobre
          desenvolvimento web por algum tempo, em 2022 decidi retornar aos
          estudos e atualizar minhas habilidades. Agora, estou animado para
          continuar explorando e crescendo como desenvolvedor.
        </PStory>
      </DivMyStory2>
    </ContainerMyStory>
  );
}

export default MyStory;
