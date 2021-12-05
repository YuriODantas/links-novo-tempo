import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 15px;
  border-radius: 10px 10px 0 0;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  opacity: 85%;
`

export const Icon = styled.img`
  width: 25px;
`
