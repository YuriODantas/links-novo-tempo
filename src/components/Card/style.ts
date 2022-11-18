import styled from 'styled-components'

export const Container = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.text};
  width: 150px;
  height: 250px;
  border-radius: 10px;
  margin: 5px;
  padding: 10px;
  text-decoration: none;
  cursor: pointer;
`

export const Image = styled.img`
  width: 130px;
  border-radius: 10px;
`

export const Name = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`

export const Profession = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`
