import { motion } from 'framer-motion'
import Head from 'next/head'
import React, { useContext } from 'react'
import { Banner } from '../components/Banner'
import { Button } from '../components/Button'
import { ButtonFooter } from '../components/ButtonFooter'
import { Container, Content } from '../components/Container'
import { Description } from '../components/Description'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Title } from '../components/Title'
import { AppContext } from '../context/AppContext'
import { Loading } from '../components/Loading'

const Home: React.FC = () => {
  const {
    schedule,
    buttons,
    position,
    handleNextInfoFooter,
    handlePreviousInfoFooter,
    loading
  } = useContext(AppContext)

  return (
    <>
      <Head>
        <title>Novo Tempo</title>
        <meta
          name="description"
          content="Links oficiais da Igreja Novo Tempo"
        />
        <link rel="icon" href="/faviconNT.svg" />
      </Head>

      <Container>
        {loading && <Loading />}
        {!loading && (
          <>
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
              {buttons.map((infos, index) => (
                <Button
                  key={index}
                  icon={infos.icon}
                  name={infos.name}
                  url={infos.link}
                  delay={1.5}
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
                title={schedule[position]?.title}
                primeiroDia={schedule[position]?.firstDesc}
                segundoDia={schedule[position]?.secondDesc}
              />
              <ButtonFooter
                handleClick={handleNextInfoFooter}
                type="next"
                icon="/btn-next.svg"
              />
            </Footer>
          </>
        )}
      </Container>
    </>
  )
}

export default Home
