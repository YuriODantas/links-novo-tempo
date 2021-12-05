import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
  margin: 0 10px;
  border-radius: 10px 10px 0 0;
  background-color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  opacity: 85%;
`

export const Title = styled.p`
  width: 100%;
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.text};
`
export const PrimeiroDia = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 300;
  font-size: 18px;
`
export const SegundoDia = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 300;
  font-size: 18px;
`
