import React, { FC } from 'react'
import * as S from './style'

interface IProps {
  photo: string
  name: string
  profession: string
  slug: string
}

const Card: FC<IProps> = ({ photo, name, profession, slug }) => {
  return (
    <S.Container href={`/job/${slug}`}>
      <S.Image src={photo} alt={name + profession} />
      <S.Name>{name}</S.Name>
      <S.Profession>{profession}</S.Profession>
    </S.Container>
  )
}

export default Card
