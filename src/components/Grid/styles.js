import styled from 'styled-components'
import { up } from '../../styles/animation'

export const Container = styled.div`
  .box-line {
    border-left: 2px dashed rgba(22, 29, 29, 1);
    border-right: 2px dashed rgba(22, 29, 29, 1);
    margin: 0 auto;
    width: 132.5rem;
    height: 100%;
    display: flex;
    justify-content: space-evenly;

    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0px;
    z-index: -100;

    .line {
      height: 100%;
      border-left: 2px dashed rgba(22, 29, 29, 1);

      .front {
        position: absolute;
        opacity: 0;
        bottom: 4rem;
        left: 3rem;
        animation: 2s ${up} forwards 1s;
      }

      .ux {
        position: absolute;
        opacity: 0;
        top: 12rem;
        right: 8rem;
        animation: 2s ${up} forwards 1s;
      }

      .dev {
        position: absolute;
        opacity: 0;
        top: 55%;
        right: 5rem;
        animation: 2s ${up} forwards 1s;
      }

      .barra {
        position: absolute;
        opacity: 0;
        bottom: 4rem;
        right: 7rem;
        animation: 2s ${up} forwards 1s;
      }
    }
  }

  .lux {
    position: absolute;
    width: 23.7rem;
    height: 76.2rem;
    border-radius: 50%;
    background: rgba(118, 175, 175, 0.5);
    filter: blur(150px);
    transform: matrix(-1, 0, 0, 1, 0, 0);
    left: -25rem;
    top: 0;
  }
  .lux2 {
    position: absolute;
    width: 23.7rem;
    height: 76.2rem;
    border-radius: 50%;
    background: rgba(118, 175, 175, 0.5);
    filter: blur(150px);
    transform: matrix(-1, 0, 0, 1, 0, 0);
    right: -25rem;
    top: 0;
  }
`
