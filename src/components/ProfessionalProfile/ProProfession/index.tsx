import React, { FC } from 'react'
import * as S from './style'

interface IProps {
  profession: string
}

const ProProfession: FC<IProps> = ({ profession }) => {
  return <S.Container>{profession}</S.Container>
}

export default ProProfession
