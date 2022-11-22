import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin: 5px 0 0 0;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 90%;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
`
