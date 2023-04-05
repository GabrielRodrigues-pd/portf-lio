import React from 'react';
import { Container, Section } from './styles';
import { RiRocketFill } from 'react-icons/ri';
import { BiCookie } from 'react-icons/bi';
import { MdTimeline, MdStickyNote2, MdMovie } from 'react-icons/md';
import project1 from '../../assets/project1.png';
import img2 from '../../assets/img2.png';
import img5 from '../../assets/img5.png';
import img6 from '../../assets/img6.png';
import img7 from '../../assets/img7.png';

import { Header } from '../../components/Header';
import { Grid } from '../../components/Grid';
import { Footer } from '../../components/Footer';
import { TitlePage } from '../../components/TitlePage';
import { CardProject } from '../../components/CardProject';
import { HeaderMobile } from '../../components/HeaderMobile';

export const Project = () => {
  return (
    <Container>
      <Header />
      <HeaderMobile />
      <TitlePage
        title="Projetos & Open Source"
        description="Essa página lista os principais projetos que desenvolvi durante minha
          jornada de aprendizado."
        subTitle="Projetos Populares"
      />
      <Grid />
      <Section>
        <CardProject
          title="RocketMovies"
          icon={<MdMovie size={30} />}
          desc="RocketMovies é uma plataforma que possibilita você armazenar seus filmes e séries favoritos.
          Feito com ReactJS, Styled-Component, NodeJs, Knex."
          skill={['ReactJS', 'NodeJS', 'Knex']}
          img={project1}
          view="https://rocketmovies-dev.netlify.app"
          git="https://github.com/GabrielRodrigues-pd/RockNotes-node"
        />

        <CardProject
          title="RocketNote"
          icon={<MdStickyNote2 size={30} />}
          desc="RocketNote é uma plataforma que depois que você se cadastra é possível você armazenar suas anotações."
          skill={['ReactJS', 'NodeJS', 'Knex']}
          img={img2}
          view="https://rocketnotes-g.netlify.app"
          git="https://github.com/GabrielRodrigues-pd/RocketNotes"
        />
        <CardProject
          title="Biscoito-da-sorte"
          icon={<BiCookie size={30} />}
          desc="Aqui você pode testar sua sorte tirando uma frase do biscoito da sorte"
          skill={['HTML5', 'CSS3', 'JS']}
          img={img6}
          git="https://github.com/GabrielRodrigues-pd/biscoito-da-sorte"
          view="https://biscoito-sortudo.netlify.app"
        />
        <CardProject
          title="FocusTime"
          icon={<MdTimeline size={30} />}
          desc="Se liga nesse FocusTimer stage 06 do Explorer que deixa você fazer combinações de sons específicos e relaxantes para que você tenha mais foco nos estudos."
          skill={['HTML5', 'CSS3', 'JS']}
          img={img5}
          view="https://gabrielrodrigues-pd.github.io/focustimer/"
          git="https://github.com/GabrielRodrigues-pd/focustimer"
        />
        <CardProject
          title="AluraSpace"
          icon={<RiRocketFill size={30} />}
          desc="Uma aplicação do zero para um teste técnico de uma vaga de desenvolvedor front-end na empresa fictícia Alura Space."
          skill={['React.JS', 'SCSS']}
          img={img7}
          view="https://alura-space-gr.netlify.app/"
          git="https://github.com/GabrielRodrigues-pd/alura-space"
        />
        <CardProject
          title="Teste"
          icon={<RiRocketFill size={30} />}
          desc="Esse projeto está em desenvolvimento."
          skill={['---', '----']}
        />
      </Section>
      <Footer />
    </Container>
  );
};
