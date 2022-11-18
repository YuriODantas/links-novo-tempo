import styled from 'styled-components'

export const Container = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary};
  margin: 10px 20px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.text};
  border-radius: 10px;
`
