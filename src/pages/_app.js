import React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'

const App = ({ Component, pageProps }) => (
  <ChakraProvider theme={theme} resetCSS>
    <Component {...pageProps} />
  </ChakraProvider>
)

export default App
