import React, { FC } from 'react'
import * as S from './style'

const Wrapper: FC = ({ children }) => {
  return (
    <S.Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
    >
      {children}
    </S.Container>
  )
}

export default Wrapper
