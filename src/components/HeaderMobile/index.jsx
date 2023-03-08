import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useState } from 'react'

const pages = [
  {
    name: 'Sobre',
    url: '/about'
  },
  {
    name: 'Formação',
    url: '/training'
  },
  {
    name: 'Projetos',
    url: '/project'
  },
  {
    name: 'Contato',
    url: '/contact'
  }
]

export const HeaderMobile = () => {
  const [modal, setModal] = useState(false)

  function handleMenuModal() {
    setModal(!modal)
  }

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <FiMenu
        size={30}
        className="menu"
        color="#CCFFFF"
        onClick={handleMenuModal}
      />

      {modal && (
        <Modal>
          <ul>
            {pages.map(({ name, url }) => (
              <li key={name}>
                <Link to={url}>{name}</Link>
              </li>
            ))}
          </ul>
          <button className="close" onClick={handleMenuModal}>
            <AiFillCloseCircle />
          </button>
        </Modal>
      )}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: ${({ theme }) => theme.COR.BG_MAIN};
  box-shadow: 0px 1px 1px rgba(116, 154, 154, 0.1);
  padding: 2rem 4rem;
  transition: 1s;

  @media (min-width: 800px) {
    display: none;
  }

  .logo {
    cursor: pointer;
  }
`

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.COR.BG_MAIN};
  z-index: 1000;

  ul {
    display: flex;
    height: 100%;
    gap: 3rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
      font-size: 3rem;
      color: ${({ theme }) => theme.COR.WHITE};
    }
  }

  .close {
    position: absolute;
    top: 4rem;
    right: 4rem;
  }

  button {
    background-color: transparent;
    color: ${({ theme }) => theme.COR.WHITE};
    border: none;
    font-size: 3rem;
  }
`
