import React from 'react'
import Head from 'next/head'
import { Container, Content } from '../components/Container'
import { Header } from '../components/Header'
import { Title } from '../components/Title'
import { Description } from '../components/Description'
import { Button } from '../components/Button'
import { Banner } from '../components/Banner'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Novo Tempo</title>
        <meta
          name="description"
          content="Links oficiais da Igreja Novo Tempo"
        />
        <link rel="icon" href="/faviconNT.svg" />
      </Head>

      <Container>
        <Header>
          <img src="/logo-novo-tempo.svg" alt="Logo Novo Tempo" />
          <Title>Igreja Novo Tempo</Title>
        </Header>
        <Content>
          <Description>Canais Oficiais</Description>
          <Button
            icon="/logo-whatsapp.svg"
            name="Whatsapp"
            url="https://api.whatsapp.com/send?phone=5513997704143&text=Gra%C3%A7a%20e%20Paz%20!"
          />
          <Button
            icon="/logo-facebook.svg"
            name="Facebook"
            url="https://pt-br.facebook.com/NOVOTEMPOPG/"
          />
          <Button
            icon="/logo-instagram.svg"
            name="Instagram Oficial"
            url="https://www.instagram.com/igrejant/"
          />
          <Button
            icon="/logo-salvadores.svg"
            name="Instagram Salvadores"
            url="https://www.instagram.com/salvadoresnt/"
          />
          {/* <Button
            icon="/logo-spotify.svg"
            name="Spotify"
            url="https://open.spotify.com/show/0AVsxINMLhTCP6GuxpGGgB?si=uUYTsus_RGWgBJ40hkXEuQ&utm_source=copy-link&nd=1"
          /> */}
          <Button
            icon="/logo-googlemaps.svg"
            name="Como Chegar"
            url="https://goo.gl/maps/Fs9KxBP6JxaZiPvZ7"
          />
          <iframe
            src="https://open.spotify.com/embed/show/0AVsxINMLhTCP6GuxpGGgB?utm_source=generator&theme=0"
            width="90%"
            height="152"
            frameBorder="0"
            style={{ marginTop: '10px' }}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
          <Banner
            title="Dias de Culto"
            quarta="Quarta-feira às 19:00"
            domingo="Domingo às 19:00"
          />
        </Content>
      </Container>
    </div>
  )
}

export default Home
