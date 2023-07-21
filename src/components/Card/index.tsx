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
      {photo && <S.Image src={photo} alt={name + profession} />}
      {!photo && <S.NoImage>{name[0]}</S.NoImage>}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '30%'
        }}
      >
        <S.Name>{name}</S.Name>
        <S.Profession>{profession}</S.Profession>
      </div>
    </S.Container>
  )
}

export default Card
