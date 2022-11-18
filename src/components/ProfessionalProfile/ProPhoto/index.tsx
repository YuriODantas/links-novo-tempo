import React, { FC } from 'react'
import * as S from './style'

interface IProps {
  photo: string
}

const ProPhoto: FC<IProps> = ({ photo }) => {
  return <S.Container src={photo} alt={photo} />
}

export default ProPhoto
