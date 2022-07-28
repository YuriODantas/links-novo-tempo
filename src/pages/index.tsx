import { motion } from 'framer-motion'
import Head from 'next/head'
import React, { useState } from 'react'
import { Banner } from '../components/Banner'
import { Button } from '../components/Button'
import { ButtonFooter } from '../components/ButtonFooter'
import { Container, Content } from '../components/Container'
import { Description } from '../components/Description'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Title } from '../components/Title'
import { buttonsInfo, schedule } from '../data/infos'

const Home: React.FC = () => {
  const [position, setPosition] = useState(0)

  const handleNextInfoFooter = () => {
    setPosition(pos => (pos < schedule.length - 1 ? pos + 1 : pos))
  }

  const handlePreviousInfoFooter = () => {
    setPosition(pos => (pos > 0 ? pos - 1 : pos))
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
          {buttonsInfo.map((infos, index) => (
            <Button
              key={index}
              icon={infos.icon}
              name={infos.name}
              url={infos.link}
              delay={infos.delay}
            />
          ))}
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
            handleClick={handlePreviousInfoFooter}
            type="previous"
            icon="/btn-previous.svg"
          />
          <Banner
            title={schedule[position].title}
            primeiroDia={schedule[position].primeiroDia}
            segundoDia={schedule[position].segundoDia}
          />
          <ButtonFooter
            handleClick={handleNextInfoFooter}
            type="next"
            icon="/btn-next.svg"
          />
        </Footer>
      </Container>
    </div>
  )
}

export default Home
