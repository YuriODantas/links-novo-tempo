import { motion } from 'framer-motion'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { Button } from '../../components/Button'
import { Container, Content } from '../../components/Container'
import { Header } from '../../components/Header'
import ProContacts from '../../components/ProfessionalProfile/ProContacts'
import ProDescription from '../../components/ProfessionalProfile/ProDescription'
import ProName from '../../components/ProfessionalProfile/ProName'
import ProPhoto from '../../components/ProfessionalProfile/ProPhoto'
import ProProfession from '../../components/ProfessionalProfile/ProProfession'
import { Title } from '../../components/Title'
import { IProfessional, professionals } from '../../data/professionals'

const ProfessionalProfile: React.FC = () => {
  const [professional, setProfessional] = useState<IProfessional | null>(null)
  const { query } = useRouter()
  const slug = query.slug

  useEffect(() => {
    if (slug) {
      setProfessional(professionals.find(prof => prof.slug === slug))
    }
  }, [slug])

  if (!professional) {
    return null
  }

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
          <ProPhoto photo={professional.photo} />
          <ProName name={professional.name} />
          <ProProfession profession={professional.profession} />
          {professional.company && (
            <ProProfession profession={professional.company} />
          )}
          <ProDescription description={professional.description} />
          <ProContacts
            whatsapp={professional.whatsapp}
            social={professional.social}
            address={professional.address}
          />
          <Button icon="/btn-previous.svg" name="Voltar" url="/job" delay={0} />
        </Content>
      </Container>
    </div>
  )
}

export default ProfessionalProfile
