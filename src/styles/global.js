import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

 /*  @media (max-width: 400px) {
    html {
      font-size: 70%;
    }
  } */

  body{
    background-color: ${({ theme }) => theme.COR.BG_MAIN};
    -webkit-font-smoothing: antialiased;
  }

  img{
    display: flex;
    max-width: 100%;
  }

  ul, li{
    list-style: none;
  }

  li{
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    cursor: pointer;
  }

  a{
    text-decoration: none;
  }

  button, a{
    cursor: pointer;
    transition: filter 0.2;
  }

  button:hover{
    filter: brightness(0.9)
  }

  h1{
    font-size: 4.2rem;
    font-family: 'Josefin Sans', sans-serif;
  }

  a, span, p, button, h2 {
    font-family: 'Open Sans', sans-serif;
  }

  &::-webkit-scrollbar {
    width: .8rem;
    height: .8rem;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COR.TEXT};
    border-radius: 2rem;
  }
`
