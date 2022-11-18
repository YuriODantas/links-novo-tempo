import styled from 'styled-components'

export const Container = styled.main`
  height: 100vh;
  width: 100vw;
  background-image: url('/Sky.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  overflow-y: scroll;
`
