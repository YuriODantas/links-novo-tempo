import React from 'react'
import * as C from './style'

type Props = {
  icon: string
  name: string
  url: string
  delay: number
}

export const Button = ({ icon, name, url, delay }: Props) => {
  return (
    <C.Container
      href={url}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay, duration: 0.5 }}
    >
      <C.Icon src={icon} alt={name} />
      <C.Text>{name}</C.Text>
    </C.Container>
  )
}
