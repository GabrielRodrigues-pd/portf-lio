import React from 'react'
import { Container, Section } from './styles'
import { RiRocketFill } from 'react-icons/ri'
import project1 from '../../assets/project1.png'
import img2 from '../../assets/img2.png'
import img5 from '../../assets/img5.png'

import { Header } from '../../components/Header'
import { Grid } from '../../components/Grid'
import { Footer } from '../../components/Footer'
import { TitlePage } from '../../components/TitlePage'
import { CardProject } from '../../components/CardProject'
import { HeaderMobile } from '../../components/HeaderMobile'

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
          icon={<RiRocketFill size={30} />}
          desc="RocketMovies é uma plataforma que possibilita você armazenar seus filmes e séries favoritos.
          Feito com ReactJS, Styled-Component, NodeJs, Knex."
          skill={['ReactJS', 'NodeJS', 'Knex']}
          img={project1}
          view="https://rocketmovies-dev.netlify.app"
          git="https://github.com/GabrielRodrigues-pd/RockNotes-node"
        />

        <CardProject
          title="RocketNote"
          icon={<RiRocketFill size={30} />}
          desc="RocketNote é uma plataforma que depois que você se cadastra é possível você armazenar suas anotações."
          skill={['ReactJS', 'NodeJS', 'Knex']}
          img={img2}
          view="https://rocketnotes-g.netlify.app"
          git="https://github.com/GabrielRodrigues-pd/RocketNotes"
        />
        <CardProject
          title="Biscoito-da-sorte"
          icon={<RiRocketFill size={30} />}
          desc="Aqui você pode testar sua sorte tirando uma frase do biscoito da sorte"
          skill={['HTML5', 'CSS3', 'JS']}
          img={project1}
        />
        <CardProject
          title="FocusTime"
          icon={<RiRocketFill size={30} />}
          desc="Se liga nesse FocusTimer stage 06 do Explorer que deixa você fazer combinações de sons específicos e relaxantes para que você tenha mais foco nos estudos."
          skill={['HTML5', 'CSS3', 'JS']}
          img={img5}
          view="https://gabrielrodrigues-pd.github.io/focustimer/"
          git="https://github.com/GabrielRodrigues-pd/focustimer"
        />
      </Section>
      <Footer />
    </Container>
  )
}
