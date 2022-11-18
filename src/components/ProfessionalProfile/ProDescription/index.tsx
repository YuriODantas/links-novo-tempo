import React, { FC } from 'react'
import * as S from './style'

interface IProps {
  description: string
}

const ProDescription: FC<IProps> = ({ description }) => {
  return <S.Container>{description}</S.Container>
}

export default ProDescription
