import styled from 'styled-components'

export const Container = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin: 10px 0 0 0;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 90%;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
`

export const Text = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 24px;
`

export const Icon = styled.img`
  position: absolute;
  top: 11px;
  left: 10px;
  width: 25px;
`
