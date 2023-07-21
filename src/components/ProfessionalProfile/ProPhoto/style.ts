import styled from 'styled-components'

export const Container = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 10px;
  margin: 5px;
  object-fit: cover;
`

export const NoImage = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.primary};
  width: 180px;
  height: 180px;
  border-radius: 10px;
`
