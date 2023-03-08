import styled from 'styled-components'
import { up, opacity } from '../../styles/animation'

export const Container = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
`

export const Section = styled.div`
  margin: 0 auto;
  margin-top: 24rem;
  max-width: 58rem;
  animation: 1s ${up} ease-out forwards;
  transition: 500ms;

  @media (max-width: 600px) {
    padding: 0 2rem;
  }

  > h1 {
    font-weight: 700;
    line-height: 4.3rem;
    max-width: 37rem;
    background: #25b7ae;
    background-image: linear-gradient(to right, #25b7ae 21%, #7ee9f0 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 100%;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 2rem;
    animation: 1s ${opacity} forwards;
  }

  > p {
    color: ${({ theme }) => theme.COR.TITLE};
    font-size: 1.8rem;
    line-height: 2.4rem;
    font-weight: 400;
    max-width: 57.8rem;
    position: relative;
    animation: 2s ${opacity} forwards;

    > ::after {
      content: '';
      width: 0.2rem;
      height: 2.3rem;
      background: linear-gradient(
        180deg,
        #7ee9f0 0%,
        #25b7ae 100%,
        #25b7ae 100%
      );
      top: 0.4rem;
      left: -4.2rem;
      position: absolute;
    }

    > span {
      color: ${({ theme }) => theme.COR.TEXT_LIGHT};
      font-size: 1.8rem;
      line-height: 2.4rem;
      font-weight: 400;
      animation: 2s ${opacity} forwards;
    }
  }

  > .location {
    margin: 2rem 0;
    font-size: 1.6rem;
    font-weight: 300;
    line-height: 2.3rem;
    color: ${({ theme }) => theme.COR.TEXT_LIGHT};
    animation: 3s ${opacity} forwards;
  }

  > a {
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 1.8rem;
    color: ${({ theme }) => theme.COR.WHITE};
    position: relative;
    border-bottom: 2px solid ${({ theme }) => theme.COR.WHITE};
    animation: 4s ${opacity} forwards;

    &:hover {
      color: ${({ theme }) => theme.COR.TEXT};
      border-bottom: 2px solid ${({ theme }) => theme.COR.TEXT};
    }
  }
`
