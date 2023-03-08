import { Container, Section } from './styles'
import { Link } from 'react-router-dom'

import { Grid } from '../../components/Grid'
import { Header } from '../../components/Header'
import { HeaderMobile } from '../../components/HeaderMobile'

export function Home() {
  return (
    <Container>
      <Header />
      <HeaderMobile />
      <Section>
        <h1>Gabriel Rodrigues</h1>
        <p>
          Front-end Developer | UX/UI Design <br />
          <span>Um programador, dedicado a mudar a realidade a sua volta.</span>
        </p>

        <p className="location">Localizado em Patos - Paraíba</p>
        <Link to="/about">Sobre mim</Link>
      </Section>
      <Grid />
    </Container>
  )
}
