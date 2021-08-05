import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@/styles/theme'

const App = ({ Component, pageProps }) => (
  <ChakraProvider theme={theme} resetCSS>
    <Component {...pageProps} />
  </ChakraProvider>
)

export default App
