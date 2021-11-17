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
          {/* <Button
            icon="/logo-whatsapp.svg"
            name="Whatsapp"
            url="https://google.com/"
          /> */}
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
          <Button
            icon="/logo-spotify.svg"
            name="Spotify"
            url="https://open.spotify.com/show/0AVsxINMLhTCP6GuxpGGgB?si=uUYTsus_RGWgBJ40hkXEuQ&utm_source=copy-link&nd=1"
          />
          <Button
            icon="/logo-googlemaps.svg"
            name="Como Chegar"
            url="https://www.google.com.br/maps/dir/-24.027538,-46.5143723/Igreja+Novo+Tempo+-+R.+Otac%C3%ADlia+da+Luz+Brasil,+273+-+Nova+Mirim,+Praia+Grande+-+SP,+11717-300/@-24.0259327,-46.5076377,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x94ce1f0fd2cb9195:0x59cf5f555fa8d7c4!2m2!1d-46.4897991!2d-24.0219088"
          />
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
