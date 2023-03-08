import { Container } from './styles'

import { Grid } from '../../components/Grid'
import { Header } from '../../components/Header'
import { CardSkills } from '../../components/CardSkills'
import { Footer } from '../../components/Footer'
import { TitlePage } from '../../components/TitlePage'
import { HeaderMobile } from '../../components/HeaderMobile'

export const Training = () => {
  return (
    <Container>
      <Header />
      <HeaderMobile />
      <TitlePage
        title="Formação & Skills"
        description="Essa página lista os principais cursos intensivos e habilidades que possuo."
        subTitle="Cursos Intensivos"
      />
      <CardSkills
        name="Explore - Rocketseat"
        text="A minha mais nova experiência foi o Explorer, em que fiz uma formação para iniciantes no mercado de programação. O explore me proporcionou aprimorar meus conhecimentos em JavaScript, ReactJS e Node"
        time="56h"
        tec={[
          'React',
          'Node',
          'JS',
          'CSS3',
          'HTML5',
          'Express',
          'Knex',
          'JWT',
          'Styled-components',
          'Git',
          'GitHub'
        ]}
      />
      <CardSkills
        name="Origamid - UX/IU Design"
        text="A minha mais nova experiência foi o Explorer, em que fiz uma formação para iniciantes no mercado de programação. O explore me proporcionou aprimorar meus conhecimentos em JavaScript, ReactJS e Node"
        time="33h"
        tec={['UX/IU', 'Figma']}
      />
      <CardSkills
        name="Programador BR"
        text="A minha mais nova experiência foi o Explorer, em que fiz uma formação para iniciantes no mercado de programação. O explore me proporcionou aprimorar meus conhecimentos em JavaScript, ReactJS e Node"
        time="43h"
        tec={['JS', 'HTML5', 'CSS3', 'React']}
      />
      <CardSkills
        name="Origamid - React Completo"
        text="A minha mais nova experiência foi o Explorer, em que fiz uma formação para iniciantes no mercado de programação. O explore me proporcionou aprimorar meus conhecimentos em JavaScript, ReactJS e Node"
        time="43h"
        tec={['React']}
      />
      <Footer />
      <Grid />
    </Container>
  )
}
