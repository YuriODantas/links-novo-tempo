import styled from 'styled-components'

export const Container = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  height: 70%;
  border-radius: 10px;
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
  width: 130px;
  height: 70%;
  border-radius: 10px;
`

export const Name = styled.p`
  font-size: 16px;
  font-weight: 800;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`

export const Profession = styled.span`
  font-size: 12px;
  line-height: 14px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`
