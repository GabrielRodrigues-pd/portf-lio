import React from 'react'
import styled from 'styled-components'
import { AiFillGithub, AiOutlineFolderView } from 'react-icons/ai'

export const CardProject = ({ title, icon, desc, skill, img, git, view }) => {
  return (
    <Container>
      <div className="info">
        {icon}
        <h2>{title}</h2>
      </div>
      <div className="info">
        <p>{desc}</p>
      </div>
      <div className="technologies">
        {skill.map(skill => (
          <div className="tec info" key={skill}>
            {skill}
          </div>
        ))}
      </div>

      <div className="access">
        <img src={img} alt="" />

        <div>
          <AiFillGithub size={30} />
          <a href={git} target="_blank">
            github
          </a>
        </div>
        <div>
          <AiOutlineFolderView size={30} />
          <a href={view} target="_blank">
            view
          </a>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.COR.CARD};
  border-left: 2px solid ${({ theme }) => theme.COR.WHITE};
  border-bottom: 2px solid ${({ theme }) => theme.COR.WHITE};
  padding: 2rem;
  margin-bottom: 3rem;
  position: relative;
  color: ${({ theme }) => theme.COR.TITLE};

  img {
    position: absolute;
    filter: blur(2px);
    opacity: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: bottom center;
    top: 0;
    border-radius: 0.8rem;
    z-index: -1;
  }

  &:hover {
    /* background: red; */
    .info {
      opacity: 0;
    }
    .access {
      opacity: 1;

      transition: 1s;
    }
    img {
      opacity: 1;
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
      max-width: 25.2rem;
      font-size: 1.6rem;
      margin: 2rem 0;
      color: ${({ theme }) => theme.COR.TEXT};
    }

    .tec {
      background-color: ${({ theme }) => theme.COR.SPAN};
      border-radius: 0.8rem;
      padding: 0.4rem 0.8rem;
      font-family: 'Fira Code', monospace;
      font-weight: 600;
      color: ${({ theme }) => theme.COR.WHITE};
      font-size: 1.6rem;
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }
  .technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .access {
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 0.8rem;
    background-color: transparent;

    a {
      color: ${({ theme }) => theme.COR.TITLE};
      font-size: 2rem;
      padding-left: 1rem;
    }
  }
`
