import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled(motion.p)`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 300;
  font-size: 24px;
  margin: 0;
  padding: 0;
`
