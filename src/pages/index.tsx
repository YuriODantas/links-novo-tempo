import React from 'react'
import Head from 'next/head'
import { Container, Content } from '../components/Container'
import { Header } from '../components/Header'
import { Title } from '../components/Title'
import { Description } from '../components/Description'
import { Button } from '../components/Button'
import { Banner } from '../components/Banner'
import { motion } from 'framer-motion'

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
          <motion.img
            src="/logo-novo-tempo.svg"
            alt="Logo Novo Tempo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
          <Title>Igreja Novo Tempo</Title>
        </Header>
        <Content>
          <Description>Canais Oficiais</Description>
          <Button
            icon="/logo-whatsapp.svg"
            name="Whatsapp"
            url="https://api.whatsapp.com/send?phone=5513997704143&text=Gra%C3%A7a%20e%20Paz%20!"
            delay={1.5}
          />
          <Button
            icon="/logo-facebook.svg"
            name="Facebook"
            url="https://pt-br.facebook.com/NOVOTEMPOPG/"
            delay={1.6}
          />
          <Button
            icon="/logo-instagram.svg"
            name="Instagram Oficial"
            url="https://www.instagram.com/igrejant/"
            delay={1.7}
          />
          <Button
            icon="/logo-salvadores.svg"
            name="Instagram Salvadores"
            url="https://www.instagram.com/salvadoresnt/"
            delay={1.8}
          />
          <Button
            icon="/logo-googlemaps.svg"
            name="Como Chegar"
            url="https://goo.gl/maps/Fs9KxBP6JxaZiPvZ7"
            delay={1.9}
          />
          <motion.iframe
            src="https://open.spotify.com/embed/show/0AVsxINMLhTCP6GuxpGGgB?utm_source=generator&theme=0"
            width="90%"
            height="152"
            frameBorder="0"
            style={{ marginTop: '10px' }}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
          ></motion.iframe>
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
