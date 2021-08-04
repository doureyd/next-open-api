import React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  sizes: {
    container: {
      xl: '1200px',
    },
  },
})

const App = ({ Component, pageProps }) => (
  <ChakraProvider theme={theme} resetCSS>
    <Component {...pageProps} />
  </ChakraProvider>
)

export default App
