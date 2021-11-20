import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { AnimateSharedLayout } from 'framer-motion'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <AnimateSharedLayout>
        <Component {...pageProps} />
        <GlobalStyle />
      </AnimateSharedLayout>
    </ThemeProvider>
  )
}

export default MyApp
