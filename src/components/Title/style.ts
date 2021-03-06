import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled(motion.h1)`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 300;
  margin: 0;
  text-align: center;
`
