import styled from 'styled-components'
import { up } from '../../styles/animation'

export const Container = styled.div`
  position: relative;
  height: 220vh;
  overflow: hidden;
  color: ${({ theme }) => theme.COR.TITLE};

  @media (max-width: 800px) {
    height: 300vh;
  }
`

export const Section = styled.section`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
  max-width: 66rem;
  animation: 1s ${up} ease-in forwards;
`
