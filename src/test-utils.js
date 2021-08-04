import { ChakraProvider, theme } from '@chakra-ui/react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

const ChakraRenderer = ({ children }) => (
  <ChakraProvider theme={theme} resetCSS>
    {children}
  </ChakraProvider>
)

const customRender = (ui, options = {}) =>
  render(ui, { wrapper: ChakraRenderer, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
