import React from 'react'
import styled from 'styled-components'
import { up } from '../../styles/animation'

export const TitlePage = ({ title, description, subTitle, children }) => {
  return (
    <Container>
      <h1>{title}</h1>
      <p>{description}</p>

      <h2 className="title">{subTitle}</h2>
      {children}
    </Container>
  )
}

const Container = styled.section`
  margin: 0 auto;
  margin-top: 15rem;
  max-width: 62rem;
  animation: 1s ${up} ease-in-out forwards;

  @media (max-width: 650px) {
    padding: 0 2rem;
  }

  > h1 {
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
  }

  > p {
    color: ${({ theme }) => theme.COR.TEXT};
    font-size: 1.6rem;
    line-height: 2.9rem;
  }

  > h2 {
    color: ${({ theme }) => theme.COR.TITLE};
    font-weight: 600;
    font-size: 2rem;
    margin-top: 4rem;
    margin-bottom: 5rem;
    position: relative;

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
      top: 0.4rem;
      left: -2.2rem;
      position: absolute;
    }
  }
`
