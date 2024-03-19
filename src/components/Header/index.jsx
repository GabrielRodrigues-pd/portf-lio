import styled from "styled-components";
import logo from "../../assets/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { Links } from "./Links";

export function Header() {
  const local = useLocation();
  const contatoUrl =
    "https://api.whatsapp.com/send?phone=5583996566093&text=Bem-vindo%20ao%20meu%20canal%20de%20atendimento%20pelo%20WhatsApp!%20Como%20posso%20ser%20%C3%BAtil%20para%20voc%C3%AA%20hoje?";
  return (
    <Container>
      <nav>
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>

        <ul>
          <Links name="Sobre" to="/about" />
          <Links name="Formação" to="/training" />
          <Links name="Projetos" to="/project" />
          <Links name="Contato" to={contatoUrl} />
        </ul>
        <img src={logo} alt="logo" className="img2" />
      </nav>
    </Container>
  );
}

export const Container = styled.div`
  background: ${({ theme }) => theme.COR.BG_MAIN};
  @media (max-width: 800px) {
    display: none;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 14rem;
    box-shadow: 0px 1px 1px rgba(116, 154, 154, 0.1);

    .img2 {
      opacity: 0;
    }

    > .logo {
      cursor: pointer;
    }

    > ul {
      display: flex;
      align-items: center;

      a {
        font-size: 1.2rem;
        color: ${({ theme }) => theme.COR.TEXT};
        text-transform: uppercase;
        padding: 1rem 1.8rem;
        border-radius: 0.8rem;

        &:hover {
          background-color: #1a2121;
          color: ${({ theme }) => theme.COR.WHITE};
          transition: 500ms;
        }
      }
    }
  }
`;
