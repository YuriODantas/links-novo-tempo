import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 30px;
  border-radius: 10px 10px 0 0;
  background-color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  opacity: 85%;
`

export const Title = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 18px;
`
export const Quarta = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 300;
  font-size: 18px;
`
export const Domingo = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 300;
  font-size: 18px;
`
