import styled from 'styled-components'

export const Container = styled.img`
  width: 200px;
  border-radius: 10px;
  margin: 5px;
`

export const NoImage = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.primary};
  width: 130px;
  height: 180px;
  border-radius: 10px;
`
