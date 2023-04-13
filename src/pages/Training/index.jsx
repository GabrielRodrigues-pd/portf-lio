import { Container } from './styles';

import { Grid } from '../../components/Grid';
import { Header } from '../../components/Header';
import { CardSkills } from '../../components/CardSkills';
import { Footer } from '../../components/Footer';
import { TitlePage } from '../../components/TitlePage';
import { HeaderMobile } from '../../components/HeaderMobile';

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
          'GitHub',
        ]}
      />
      <CardSkills
        name="Alura - Formação React"
        text="Nesta formação, eu percorri uma jornada do Curso React: desenvolvendo com JavaScript ao Curso React: migrando para TypeScript e aprender o passo a passo para desenvolver aplicações do zero até o deploy."
        time="65h"
        tec={[
          'React',
          'Componentes',
          'Hooks',
          'Arquivos estáticos',
          'React Router',
          'ContextAPI',
          'React com TypeScript',
        ]}
      />
      <CardSkills
        name="Origamid - UX/IU Design"
        text="Com esse curso eu aprimorei meus conhecimentos Design, UI/UX."
        time="33h"
        tec={['UX/IU', 'Figma']}
      />
      <CardSkills
        name="Programador BR"
        text="Curso online que tem como objetivo ensinar programação do zero para iniciantes e aprimorar habilidades de programadores experientes."
        time="43h"
        tec={['JS', 'HTML5', 'CSS3', 'React']}
      />
      <CardSkills
        name="Origamid - React Completo"
        text="Na Origamid eu pude me aprofundar mais em ReactJS, JS e desenvolver projetos bem legais."
        time="18h"
        tec={['React']}
      />
      <CardSkills
        name="Angular parte 1 - Alura"
        text="Neste curso eu pude conhecer o Angular e adquirir os fundamentos básicos, a base para decolar com o framework."
        time="16h"
        tec={['Angular']}
      />
      <Footer />
      <Grid />
    </Container>
  );
};
