import React, { FC } from 'react'
import * as S from './style'

interface IProps {
  name: string
  photo: string
}

const ProPhoto: FC<IProps> = ({ name, photo }) => {
  return (
    <>
      {photo && <S.Container src={photo} alt={photo} />}
      {!photo && <S.NoImage>{name[0]}</S.NoImage>}
    </>
  )
}

export default ProPhoto
