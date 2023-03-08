import styled from 'styled-components'

export const Skill = ({ skill, icon }) => {
  return (
    <Div>
      {icon}
      {skill}
    </Div>
  )
}

const Div = styled.div`
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
`
