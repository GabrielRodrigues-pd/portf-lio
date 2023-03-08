import styled from 'styled-components'

import { up } from '../../styles/animation'

import { BiBookBookmark, BiTimeFive } from 'react-icons/bi'
import { Skill } from './Skill'

export const CardSkills = ({ name, text, time, tec }) => {
  return (
    <Card>
      <div className="primeira">
        <div>
          <BiBookBookmark size={30} color="#25B7AE" />
          <h2>{name}</h2>
        </div>
        <div>
          <Skill skill={time} icon={<BiTimeFive size={20} />} />
        </div>
      </div>
      <div>
        <p>{text}</p>
      </div>
      <div className="skills">
        {tec.map(sk => (
          <Skill key={sk} skill={sk} />
        ))}
      </div>
    </Card>
  )
}

const Card = styled.div`
  margin: 0 auto;
  margin-bottom: 4rem;
  overflow-y: hidden;
  max-width: 62.2rem;
  max-height: 7rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.COR.CARD};
  border-left: 2px solid ${({ theme }) => theme.COR.WHITE};
  border-bottom: 2px solid ${({ theme }) => theme.COR.WHITE};
  padding: 2rem;
  animation: 1s ${up} ease-in-out 1s forwards;
  opacity: 0;
  transition: 1s ease;
  cursor: pointer;

  &:hover {
    max-height: 50rem;
  }

  .primeira {
    justify-content: space-between;
    gap: 1rem;

    @media (max-width: 500px) {
      flex-direction: column;
    }
  }

  div {
    display: flex;
    flex-wrap: wrap;

    h2 {
      font-size: 2rem;
      font-family: 'Fira Sans', sans-serif;
      font-weight: 500;
      line-height: 2.9rem;
      color: ${({ theme }) => theme.COR.WHITE};
      margin-left: 2rem;
    }

    p {
      max-width: 34rem;
      font-size: 1.6rem;
      margin: 15px 0;
      color: ${({ theme }) => theme.COR.TEXT};
    }
  }

  .skills {
    gap: 2rem;
  }
`
