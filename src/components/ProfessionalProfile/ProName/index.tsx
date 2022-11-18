import React, { FC } from 'react'
import * as S from './style'

interface IProps {
  name: string
}

const ProName: FC<IProps> = ({ name }) => {
  return <S.Container>{name}</S.Container>
}

export default ProName
