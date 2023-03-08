import styled from 'styled-components'

export const Footer = () => {
  return (
    <Container>
      <ul>
        <li>
          <a href="https://www.instagram.com/aeogabriel/" target="_blank">
            instagram
          </a>
          <a href="https://github.com/GabrielRodrigues-pd" target="_blank">
            github
          </a>
          <a
            href="https://www.linkedin.com/in/gabriel-rodrigues-873075236/"
            target="_blank"
          >
            linkedin
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5583996121185&text=Bem-vindo%20ao%20meu%20canal%20de%20atendimento%20pelo%20WhatsApp!%20Como%20posso%20ser%20%C3%BAtil%20para%20voc%C3%AA%20hoje?"
            target="_blank"
          >
            whatsapp
          </a>
        </li>
      </ul>
    </Container>
  )
}

const Container = styled.footer`
  margin: 0 auto;
  position: absolute;
  width: 100%;
  bottom: 4rem;
  left: 50%;
  transform: translateX(-50%);

  ul {
    padding: 0 0.8rem;
    li {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 5rem;

      a {
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 2.7rem;
        color: ${({ theme }) => theme.COR.TEXT};

        &:hover {
          color: ${({ theme }) => theme.COR.WHITE};
        }
      }
    }
  }
`
