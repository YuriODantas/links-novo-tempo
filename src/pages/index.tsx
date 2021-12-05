import React, { useState } from 'react'
import Head from 'next/head'
import { Container, Content } from '../components/Container'
import { Header } from '../components/Header'
import { Title } from '../components/Title'
import { Description } from '../components/Description'
import { Button } from '../components/Button'
import { Banner } from '../components/Banner'
import { motion } from 'framer-motion'
import { Footer } from '../components/Footer'
import { ButtonFooter } from '../components/ButtonFooter'

const Home: React.FC = () => {
  const [position, setPosition] = useState(0)
  const programacao = [
    {
      title: 'Dias de Culto',
      primeiroDia: 'Quarta-feira às 19:00',
      segundoDia: 'Domingo às 19:00'
    },
    {
      title: 'Salvadores',
      primeiroDia: 'Sábados às 19:00',
      segundoDia: '(3 primeiros do mês)'
    },
    {
      title: 'Projeto Verão Salvadores',
      primeiroDia: 'Domingo das 09:00',
      segundoDia: 'até às 12:00'
    }
  ]
  const handleClick = (type: string) => {
    if (type === 'next') {
      if (position < programacao.length - 1) {
        setPosition(e => e + 1)
      } else {
        setPosition(position)
      }
    } else if (type === 'previous') {
      if (position > 0) {
        setPosition(e => e - 1)
      }
    }
  }

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
        <Content>
          <Header>
            <motion.img
              src="/logo-novo-tempo.svg"
              alt="Logo Novo Tempo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            />
            <Title>Igreja Novo Tempo</Title>
          </Header>
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
        </Content>
        <Footer>
          <ButtonFooter
            handleClick={handleClick}
            type="previous"
            icon="/btn-previous.svg"
          />
          <Banner
            title={programacao[position].title}
            primeiroDia={programacao[position].primeiroDia}
            segundoDia={programacao[position].segundoDia}
          />
          <ButtonFooter
            handleClick={handleClick}
            type="next"
            icon="/btn-next.svg"
          />
        </Footer>
      </Container>
    </div>
  )
}

export default Home
