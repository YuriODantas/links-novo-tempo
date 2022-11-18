import React, { FC } from 'react'
import * as S from './style'

interface IProps {
  whatsapp: string
  social?: {
    facebook?: string
    instagram?: string
    linkedIn?: string
  }
  address?: string
}

const ProContacts: FC<IProps> = ({ whatsapp, social, address }) => {
  return (
    <S.Container>
      <S.Button href={whatsapp}>WhatsApp</S.Button>
      {social.facebook && <S.Button href={social.facebook}>Facebook</S.Button>}
      {social.instagram && (
        <S.Button href={social.instagram}>Instagram</S.Button>
      )}
      {social.linkedIn && <S.Button href={social.linkedIn}>LinkedIn</S.Button>}
      {address && <S.Button href={address}>Como chegar</S.Button>}
    </S.Container>
  )
}

export default ProContacts
