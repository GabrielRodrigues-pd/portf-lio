import styled from 'styled-components'
import { up, opacity, loop } from '../../styles/animation'

export const Container = styled.div`
  position: relative;
  height: 120vh;
  overflow: hidden;
  color: ${({ theme }) => theme.COR.TITLE};

  @media (max-height: 700px) {
    height: 150vh;
  }
`

export const Section = styled.div`
  margin: 0 auto;
  margin-top: 15rem;
  max-width: 101.8rem;
  display: flex;
  align-items: center;

  @media (max-width: 1015px) {
    flex-direction: column;
    gap: 4rem;
  }

  > .me {
    width: 37rem;
    height: 48rem;
    object-fit: cover;
    filter: drop-shadow(-19px 23px 0px rgba(17, 24, 24, 0.8));
    backdrop-filter: blur(1.5px);
    border-radius: 0.8rem;
    transform: matrix(0.99, 0.13, 0.24, 0.97, 0, 0);
    margin-left: 6rem;
    animation: 5s ${loop} ease-in-out infinite;
    transition: 1ms;

    @media (max-width: 500px) {
      width: 30rem;
      height: 40rem;
    }

    @media (max-width: 1000px) {
      margin-right: 6rem;
    }

    &:hover {
      transform: matrix(1, 0, 0, 1, 0, 0);
      filter: drop-shadow(0px 0px 0px rgba(17, 24, 24, 0.8));
    }
  }

  > div {
    animation: 1s ${up} ease-out forwards;
    margin-left: 9.8rem;
    transition: 500ms;

    @media (max-width: 500px) {
      margin-left: 2rem;
    }

    h1 {
      margin-bottom: 2rem;
      background: linear-gradient(
        229.78deg,
        #d2ff96 38.93%,
        #25b7ae 102.08%,
        #3fd3ca 102.08%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: 1s ${opacity} forwards;
    }

    p {
      max-width: 38rem;
      opacity: 1;
      color: ${({ theme }) => theme.COR.TEXT};
      margin-bottom: 1.5rem;
      font-size: 1.6rem;
      line-height: 2.5rem;
      position: relative;

      &:nth-last-child(3) {
        &::after {
          content: '';
          width: 0.2rem;
          height: 2.3rem;
          background: linear-gradient(
            180deg,
            #7ee9f0 0%,
            #25b7ae 100%,
            #25b7ae 100%
          );
          top: -6rem;
          left: -2rem;
          position: absolute;
        }
      }
    }
    span {
      color: ${({ theme }) => theme.COR.WHITE};
    }
  }

  .btn {
    margin-top: 4rem;

    a {
      margin-right: 1.2rem;
      background-color: transparent;
      color: ${({ theme }) => theme.COR.WHITE};
      border: 1px solid #ccffff;
      padding: 1.2rem 4rem;
      border-radius: 0.8rem;
      font-weight: 600;
      font-size: 1.6rem;

      &:last-child {
        border: none;
      }
    }
  }
`
