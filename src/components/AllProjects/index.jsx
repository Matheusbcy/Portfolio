import * as Atom from "./style";
import background1 from "../../assets/gamy-paint.surge.sh_.png";
import background2 from "../../assets/checkspeech-app.surge.sh_.png";
import background3 from "../../assets/Screenshot_10.png";
import background4 from "../../assets/magical-meringue-bdde82.netlify.app_.png";
import background5 from "../../assets/effervescent-gecko-8ad5f7.netlify.app_.png";
import background6 from "../../assets/magnificent-mochi-fa70f6.netlify.app_.png";
import background7 from "../../assets/pokemon-app-react.surge.sh_.png";
import background8 from "../../assets/remarkable-youtiao-3bfcd6.netlify.app_.png";
import background9 from "../../assets/whatslab-project.surge.sh_.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { ButtonLink, ContentLinks, LinkR } from "../Projetos/style";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  backgroundColor: "#1B1F24",
  boxShadow: 24,
  padding: "40px",
  fontFamily: '"Space Grotesk", sans-serif',
  maxheight: "500px",
  color: "#FFFFFF",
  borderRadius: "10px",
};
function AllProjects() {
  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  const [open3, setOpen3] = useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);

  const [open4, setOpen4] = useState(false);
  const handleOpen4 = () => setOpen4(true);
  const handleClose4 = () => setOpen4(false);

  const [open5, setOpen5] = useState(false);
  const handleOpen5 = () => setOpen5(true);
  const handleClose5 = () => setOpen5(false);

  const [open6, setOpen6] = useState(false);
  const handleOpen6 = () => setOpen6(true);
  const handleClose6 = () => setOpen6(false);

  const [open7, setOpen7] = useState(false);
  const handleOpen7 = () => setOpen7(true);
  const handleClose7 = () => setOpen7(false);

  const [open8, setOpen8] = useState(false);
  const handleOpen8 = () => setOpen8(true);
  const handleClose8 = () => setOpen8(false);

  const [open9, setOpen9] = useState(false);
  const handleOpen9 = () => setOpen9(true);
  const handleClose9 = () => setOpen9(false);
  return (
    <>
      <Atom.ContainerAllProjects>
        <div>
          <Atom.HrAllProjects />
          <Atom.H1AllProjects>Portfolio</Atom.H1AllProjects>
          <Atom.PAllProjects>
            Bem-vindo a seção de projetos do meu portfólio! Aqui você poderá
            encontrar uma seleção dos meus trabalhos mais recentes e relevantes
            na área de desenvolvimento web. Cada projeto apresenta um breve
            resumo, imagens e tecnologias utilizadas, para que você possa ter
            uma ideia clara do meu nível de habilidade e estilo de trabalho.
            Espero que você goste do que vê e fique animado para ver mais. Não
            hesite em entrar em contato caso tenha alguma dúvida ou deseje saber
            mais sobre algum projeto específico. Aproveite sua visita e boa
            explorada!
          </Atom.PAllProjects>
        </div>
        <Atom.PAtetion>
          Obs: Clique no card para saber mais sobre o projeto :D
        </Atom.PAtetion>
      </Atom.ContainerAllProjects>

      <Atom.ContainerCardAllProjects>
        <Atom.CardsAllProjects
          background={background1}
          onClick={handleOpen1}
        ></Atom.CardsAllProjects>
        <Modal
          open={open1}
          onClose={handleClose1}
          aria-labelledby="modal-modal-title-1"
          aria-describedby="modal-modal-description-1"
        >
          <Box key="box" sx={style}>
            <Typography
              key="title"
              id="modal-modal-title-1"
              variant="h6"
              component="h2"
            >
              Pokémon Dados
            </Typography>
            <Typography
              key="desc"
              id="modal-modal-description-1"
              sx={{ mt: 2 }}
            >
              Este site foi desenvolvido para exibir uma lista de três itens
              adicionados dinamicamente pelo DOM. Além disso, o usuário pode
              pesquisar os itens por nome, através de um campo de entrada.
            </Typography>
            <Typography
              key="resources"
              id="modal-modal-title-1"
              variant="h6"
              component="h2"
              sx={{ mt: 2 }}
            >
              Recursos Utilizados
            </Typography>
            <Typography
              key="resourcesDesc"
              id="modal-modal-description-1"
              sx={{ mt: 2 }}
            >
              HTML para estruturar o conteúdo do site. CSS para estilizar a
              aparência do site. JavaScript para adicionar a funcionalidade de
              pesquisa por nome dos itens.
            </Typography>
            <ContentLinks key="links">
              <LinkR
                key="repo"
                href="https://github.com/Matheusbcy/projeto-intro-web"
                target={"_blank"}
              >
                <ButtonLink color="#5D6C83">Repositorio</ButtonLink>
              </LinkR>
              <LinkR
                key="site"
                href="https://gamy-paint.surge.sh/"
                target={"_blank"}
              >
                <ButtonLink color="#075FE4">Site</ButtonLink>
              </LinkR>
            </ContentLinks>
          </Box>
        </Modal>
        <Atom.CardsAllProjects
          background={background2}
          onClick={handleOpen2}
        ></Atom.CardsAllProjects>
        <Modal
          open={open2}
          onClose={handleClose2}
          aria-labelledby="modal-modal-title-2"
          aria-describedby="modal-modal-description-2"
        >
          <Box key="box2" sx={style}>
            <Typography
              key="title2"
              id="modal-modal-title-2"
              variant="h6"
              component="h2"
            >
              Cheespach App
            </Typography>
            <Typography
              key="desc2"
              id="modal-modal-description-2"
              sx={{ mt: 2 }}
            >
              Este é um projeto criado para vender um produto fictício usando a
              biblioteca React. O objetivo é mostrar habilidades em
              desenvolvimento de aplicações front-end e garantir uma boa
              experiência do usuário.
            </Typography>
            <Typography
              key="resources2"
              id="modal-modal-title-2"
              variant="h6"
              component="h2"
              sx={{ mt: 2 }}
            >
              Recursos Utilizados
            </Typography>
            <Typography
              key="resourcesDesc2"
              id="modal-modal-description-2"
              sx={{ mt: 2 }}
            >
              React: biblioteca JavaScript para criar interfaces de usuário.{" "}
              <br />
              Bootstrap: framework CSS para estilização do projeto. <br />{" "}
              Styled Components: biblioteca para estilização em CSS-in-JS do
              projeto.
            </Typography>
            <ContentLinks key="links2">
              <LinkR
                key="repo2"
                href="https://github.com/Matheusbcy/checkspeech-app"
                target={"_blank"}
              >
                <ButtonLink color="#5D6C83">Repositorio</ButtonLink>
              </LinkR>
              <LinkR
                key="site2"
                href="https://checkspeech-app.surge.sh/"
                target={"_blank"}
              >
                <ButtonLink color="#075FE4">Site</ButtonLink>
              </LinkR>
            </ContentLinks>
          </Box>
        </Modal>

        <Atom.CardsAllProjects
          background={background3}
          onClick={handleOpen3}
        ></Atom.CardsAllProjects>
        <Modal
          open={open3}
          onClose={handleClose3}
          aria-labelledby="modal-modal-title-2"
          aria-describedby="modal-modal-description-2"
        >
          <Box key="box3" sx={style}>
            <Typography
              key="title3"
              id="modal-modal-title-2"
              variant="h6"
              component="h2"
            >
              Calculadora React
            </Typography>
            <Typography
              key="desc3"
              id="modal-modal-description-2"
              sx={{ mt: 2 }}
            >
              Este é um projeto de uma calculadora simples desenvolvida
              utilizando a biblioteca React.
            </Typography>
            <Typography
              key="resources3"
              id="modal-modal-title-2"
              variant="h6"
              component="h2"
              sx={{ mt: 2 }}
            >
              Recursos Utilizados
            </Typography>
            <Typography
              key="resourcesDesc3"
              id="modal-modal-description-2"
              sx={{ mt: 2 }}
            >
              Cálculo básico com as operações de adição, subtração,
              multiplicação e divisão. Utilização de componentes React para a
              construção da interface. Armazenamento de valores e operações
              através do estado do componente.
            </Typography>
            <ContentLinks key="links3">
              <LinkR
                key="repo3"
                href="https://github.com/Matheusbcy/Calculadora-React"
                target={"_blank"}
              >
                <ButtonLink color="#5D6C83">Repositorio</ButtonLink>
              </LinkR>
              <LinkR
                key="site3"
                href="https://dizzy-plantation.surge.sh/"
                target={"_blank"}
              >
                <ButtonLink color="#075FE4">Site</ButtonLink>
              </LinkR>
            </ContentLinks>
          </Box>
        </Modal>
        <Atom.CardsAllProjects
          background={background4}
          onClick={handleOpen4}
        ></Atom.CardsAllProjects>

        <Modal
          open={open4}
          onClose={handleClose4}
          aria-labelledby="modal-modal-title-2"
          aria-describedby="modal-modal-description-2"
        >
          <Box key="box4" sx={style}>
            <Typography
              key="title4"
              id="modal-modal-title-2"
              variant="h6"
              component="h2"
            >
              Catálogo de Filmes
            </Typography>
            <Typography
              key="desc4"
              id="modal-modal-description-2"
              sx={{ mt: 2 }}
            >
              Este é um projeto criado para aprender e praticar HTML, CSS,
              JavaScript (DOM) e Bootstrap. O objetivo é criar um catálogo de
              filmes que permita ao usuário visualizar informações sobre os
              filmes, incluindo título, sinopse, classificação indicativa e
              imagem de capa.
            </Typography>
            <Typography
              key="resources4"
              id="modal-modal-title-2"
              variant="h6"
              component="h2"
              sx={{ mt: 2 }}
            >
              Recursos Utilizados
            </Typography>
            <Typography
              key="resourcesDesc4"
              id="modal-modal-description-2"
              sx={{ mt: 2 }}
            >
              HTML: marcação para estruturar o conteúdo da página.
              <br />
              CSS: estilização da página.
              <br />
              JavaScript (DOM): manipulação dinâmica da página. <br />{" "}
              Bootstrap: framework CSS para estilização e responsividade da
              página.
            </Typography>
            <ContentLinks key="links4">
              <LinkR
                key="repo4"
                href="https://github.com/Matheusbcy/projeto-movie-app"
                target={"_blank"}
              >
                <ButtonLink color="#5D6C83">Repositorio</ButtonLink>
              </LinkR>
              <LinkR
                key="site4"
                href="https://magical-meringue-bdde82.netlify.app/"
                target={"_blank"}
              >
                <ButtonLink color="#075FE4">Site</ButtonLink>
              </LinkR>
            </ContentLinks>
          </Box>
        </Modal>

        <Atom.CardsAllProjects
          background={background5}
          onClick={handleOpen5}
        ></Atom.CardsAllProjects>

        <Modal
          open={open5}
          onClose={handleClose5}
          aria-labelledby="modal-modal-title-2"
          aria-describedby="modal-modal-description-2"
        >
          <Box key="box5" sx={style}>
            <Typography
              key="title5"
              id="modal-modal-title-2"
              variant="h6"
              component="h2"
            >
              Pizzaria Labenu
            </Typography>
            <Typography
              key="desc5"
              id="modal-modal-description-2"
              sx={{ mt: 2 }}
            >
              Este é um projeto acadêmico sobre um website de uma pizzaria
              construído utilizando HTML, CSS, React, Router DOM e Styled
              Components.
            </Typography>
            <Typography
              key="resources5"
              id="modal-modal-title-2"
              variant="h6"
              component="h2"
              sx={{ mt: 2 }}
            >
              Recursos Utilizados
            </Typography>
            <Typography
              key="resourcesDesc5"
              id="modal-modal-description-2"
              sx={{ mt: 2 }}
            >
              Interface intuitiva e fácil de usar Navegação clara e rápida com
              Router DOM Estilização atrativa e profissional com Styled
              Components. Este projeto é apenas para fins acadêmicos e não está
              destinado a ser usado em produção.
            </Typography>
            <ContentLinks key="links5">
              <LinkR
                key="repo5"
                href="https://github.com/Matheusbcy/projeto-pizzaria-labenu"
                target={"_blank"}
              >
                <ButtonLink color="#5D6C83">Repositorio</ButtonLink>
              </LinkR>
              <LinkR
                key="site5"
                href="https://effervescent-gecko-8ad5f7.netlify.app/"
                target={"_blank"}
              >
                <ButtonLink color="#075FE4">Site</ButtonLink>
              </LinkR>
            </ContentLinks>
          </Box>
        </Modal>

        <Atom.CardsAllProjects
          background={background6}
          onClick={handleOpen6}
        ></Atom.CardsAllProjects>

        <Modal
          open={open6}
          onClose={handleClose6}
          aria-labelledby="modal-modal-title-2"
          aria-describedby="modal-modal-description-2"
        >
          <Box key="box6" sx={style}>
            <Typography
              key="title6"
              id="modal-modal-title-2"
              variant="h6"
              component="h2"
            >
              Universo em Detalhes
            </Typography>
            <Typography
              key="desc6"
              id="modal-modal-description-2"
              sx={{ mt: 2 }}
            >
              O projeto foi desenvolvido utilizando HTML, CSS, JavaScript,
              React. Além disso, o carrinho de compras e o cálculo do total a
              pagar foram implementados com o objetivo de oferecer uma melhor
              experiência ao usuário.
            </Typography>
            <Typography
              key="resources6"
              id="modal-modal-title-2"
              variant="h6"
              component="h2"
              sx={{ mt: 2 }}
            >
              Recursos
            </Typography>
            <Typography
              key="resourcesDesc6"
              id="modal-modal-description-2"
              sx={{ mt: 2 }}
            >
              <li>Catálogo de produtos com imagens e descrições detalhadas</li>
              <li>Adição de produtos ao carrinho de compras</li>
              <li>Remoção de produtos do carrinho de compras</li>
              <li>Exibição do total a pagar no carrinho de compras</li>
            </Typography>
            <ContentLinks key="links6">
              <LinkR
                key="repo6"
                href="https://github.com/Matheusbcy/projeto-frontendreact"
                target={"_blank"}
              >
                <ButtonLink color="#5D6C83">Repositorio</ButtonLink>
              </LinkR>
              <LinkR
                key="site6"
                href="https://magnificent-mochi-fa70f6.netlify.app/"
                target={"_blank"}
              >
                <ButtonLink color="#075FE4">Site</ButtonLink>
              </LinkR>
            </ContentLinks>
          </Box>
        </Modal>

        <Atom.CardsAllProjects
          background={background7}
          onClick={handleOpen7}
        ></Atom.CardsAllProjects>

        <Modal
          open={open7}
          onClose={handleClose7}
          aria-labelledby="modal-modal-title-2"
          aria-describedby="modal-modal-description-2"
        >
          <Box key="box7" sx={style}>
            <Typography
              key="title7"
              id="modal-modal-title-2"
              variant="h6"
              component="h2"
            >
              Pokémon Api
            </Typography>
            <Typography
              key="desc7"
              id="modal-modal-description-2"
              sx={{ mt: 2 }}
            >
              Este projeto é uma aplicação desenvolvida em React que consome uma
              API pública de Pokemon e oferece três páginas: todos os pokemons,
              pokedex e detalhes. Além disso, o projeto utiliza o Router,
              Material UI e Styled Components para dar vida à interface do
              usuário.
            </Typography>
            <Typography
              key="resources7"
              id="modal-modal-title-2"
              variant="h6"
              component="h2"
              sx={{ mt: 2 }}
            >
              Funcionalidades
            </Typography>
            <Typography
              key="resourcesDesc7"
              id="modal-modal-description-2"
              sx={{ mt: 2 }}
            >
              Mostrar todos os pokemons cadastrados na API <br /> Mostrar uma
              pokedex dos pokemons <br /> Mostrar detalhes de um pokemon
              específico
            </Typography>
            <ContentLinks key="links7">
              <LinkR
                key="repo7"
                href="https://github.com/Matheusbcy/projeto-react-apis"
                target={"_blank"}
              >
                <ButtonLink color="#5D6C83">Repositorio</ButtonLink>
              </LinkR>
              <LinkR
                key="site7"
                href="https://pokemon-app-react.surge.sh/"
                target={"_blank"}
              >
                <ButtonLink color="#075FE4">Site</ButtonLink>
              </LinkR>
            </ContentLinks>
          </Box>
        </Modal>

        <Atom.CardsAllProjects
          background={background8}
          onClick={handleOpen8}
        ></Atom.CardsAllProjects>

        <Modal
          open={open8}
          onClose={handleClose8}
          aria-labelledby="modal-modal-title-2"
          aria-describedby="modal-modal-description-2"
        >
          <Box key="box8" sx={style}>
            <Typography
              key="title8"
              id="modal-modal-title-2"
              variant="h6"
              component="h2"
            >
              F4Bank
            </Typography>
            <Typography
              key="desc8"
              id="modal-modal-description-2"
              sx={{ mt: 2 }}
            >
              Este é um projeto acadêmico de uma landing page para um banco,
              desenvolvido em HTML, CSS e JavaScript.
            </Typography>
            <Typography
              key="resources8"
              id="modal-modal-title-2"
              variant="h6"
              component="h2"
              sx={{ mt: 2 }}
            >
              Recursos Utilizados
            </Typography>
            <Typography
              key="resourcesDesc8"
              id="modal-modal-description-2"
              sx={{ mt: 2 }}
            >
              HTML para estruturar a página <br /> CSS para estilizar a
              interface <br />
              JavaScript para implementar as funcionalidades
            </Typography>
            <ContentLinks key="links8">
              <LinkR
                key="repo8"
                href="https://github.com/Matheusbcy/Projeto-F4Bank"
                target={"_blank"}
              >
                <ButtonLink color="#5D6C83">Repositorio</ButtonLink>
              </LinkR>
              <LinkR
                key="site8"
                href="https://remarkable-youtiao-3bfcd6.netlify.app/"
                target={"_blank"}
              >
                <ButtonLink color="#075FE4">Site</ButtonLink>
              </LinkR>
            </ContentLinks>
          </Box>
        </Modal>

        <Atom.CardsAllProjects
          background={background9}
          onClick={handleOpen9}
        ></Atom.CardsAllProjects>

        <Modal
          open={open9}
          onClose={handleClose9}
          aria-labelledby="modal-modal-title-2"
          aria-describedby="modal-modal-description-2"
        >
          <Box key="box9" sx={style}>
            <Typography
              key="title9"
              id="modal-modal-title-2"
              variant="h6"
              component="h2"
            >
              WhatsLab
            </Typography>
            <Typography
              key="desc9"
              id="modal-modal-description-2"
              sx={{ mt: 2 }}
            >
              Este projeto foi criado com o objetivo de praticar as habilidades
              de layout utilizando Flexbox e Grid Layout.
            </Typography>
            <Typography
              key="resources9"
              id="modal-modal-title-2"
              variant="h6"
              component="h2"
              sx={{ mt: 2 }}
            >
              Recursos Utilizados
            </Typography>
            <Typography
              key="resourcesDesc9"
              id="modal-modal-description-2"
              sx={{ mt: 2 }}
            >
              Como funciona Este projeto contém exemplos simples de uso do
              Flexbox e Grid Layout para criar layouts interessantes. Sinta-se livre para explorar o código e
              personalizá-lo de acordo com suas necessidades.
            </Typography>
            <ContentLinks key="links9">
              <LinkR
                key="repo9"
                href="https://github.com/Matheusbcy/Projeto-WhatsLab"
                target={"_blank"}
              >
                <ButtonLink color="#5D6C83">Repositorio</ButtonLink>
              </LinkR>
              <LinkR
                key="site9"
                href="https://whatslab-project.surge.sh/"
                target={"_blank"}
              >
                <ButtonLink color="#075FE4">Site</ButtonLink>
              </LinkR>
            </ContentLinks>
          </Box>
        </Modal>
      </Atom.ContainerCardAllProjects>
    </>
  );
}

export default AllProjects;
