import { motion } from 'framer-motion'
import Head from 'next/head'
import React, { useContext } from 'react'
import { Button } from '../../components/Button'
import Card from '../../components/Card'
import { Container, Content } from '../../components/Container'
import { Description } from '../../components/Description'
import { Header } from '../../components/Header'
import { Title } from '../../components/Title'
import Wrapper from '../../components/Wrapper'
import { AppContext } from '../../context/AppContext'

const Job: React.FC = () => {
  const { professionals } = useContext(AppContext)

  return (
    <div>
      <Head>
        <title>Novo Tempo</title>
        <meta
          name="description"
          content="Profissionais que temos na Igreja Novo Tempo"
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
          <Description>O que temos na Igreja</Description>
          <Wrapper>
            {professionals
              .sort((a, b) => {
                if (a.name > b.name) {
                  return 1
                }
                if (a.name < b.name) {
                  return -1
                }
                return 0
              })
              .map(professional => (
                <Card
                  key={professional.id}
                  photo={professional.photo}
                  name={professional.name}
                  profession={professional.profession}
                  slug={professional.slug}
                />
              ))}
          </Wrapper>
          <Button icon="/btn-previous.svg" name="Voltar" url="/" delay={2} />
        </Content>
      </Container>
    </div>
  )
}

export default Job
