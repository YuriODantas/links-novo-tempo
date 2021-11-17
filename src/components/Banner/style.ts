import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 60px;
  margin: 10px 0 0 0;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  opacity: 85%;
`

export const Title = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 28px;
`
export const Quarta = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 300;
  font-size: 24px;
`
export const Domingo = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 300;
  font-size: 24px;
`
