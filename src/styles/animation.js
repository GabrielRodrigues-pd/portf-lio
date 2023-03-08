import { keyframes } from 'styled-components'

export const up = keyframes`
  0%{
    opacity: 0;
    transform: translate3d(0, -100px, 0);

  }

  100%{
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`
export const opacity = keyframes`
  0%{
    opacity: 0;
  }

  100%{
    opacity: 1;
  }
`

export const loop = keyframes`
  0%{
    transform: translate3d(5px, -30px, 0) matrix(0.99, 0.13, 0.24, 0.97, 0, 0);;
  }

  50%{
    transform: translate3d(0, 0, 0) matrix(0.99, 0.13, 0.24, 0.97, 0, 0);;
  }

  100%{
    transform: translate3d(5px, -30px, 0) matrix(0.99, 0.13, 0.24, 0.97, 0, 0);;

  }
`

export const imgMe = keyframes`
  0% {
    margin-top: -100px;
  }

  100% {
    opacity: 1;
  }
`
