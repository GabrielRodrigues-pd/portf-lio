import { Container, Section } from './styles'

import me from '../../assets/me.jpg'

import { Grid } from '../../components/Grid'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { HeaderMobile } from '../../components/HeaderMobile'

export function About() {
  return (
    <Container>
      <Header />
      <HeaderMobile />
      <Section>
        <img src={me} alt="" className="me" />
        <div>
          <h1>Sobre mim.</h1>
          <p>
            Meu nome é <span>Gabriel</span>, tenho <span>20</span> anos e
            trabalho focado como desenvolvedor front-end.
          </p>
          <p>
            Estou compromissado em mudar a realidade a minha volta através da
            programação
          </p>
          <p>
            Tenho 3 anos de experiência com essas tecnologias: HTML, CSS,
            JavaScript, ReactJS.
          </p>
          <div className="btn">
            <a href="https://api.whatsapp.com/send?phone=5583996121185&text=Bem-vindo%20ao%20meu%20canal%20de%20atendimento%20pelo%20WhatsApp!%20Como%20posso%20ser%20%C3%BAtil%20para%20voc%C3%AA%20hoje?">
              Contato
            </a>
            <a>Baixar CV</a>
          </div>
        </div>
      </Section>
      <Grid />
      <Footer />
    </Container>
  )
}
