import Navbar from '@/components/Navbar'
import { Box, Container } from '@chakra-ui/react'

const DefaultLayout = ({ children }) => (
  <Container maxWidth="container.lg">
    <Navbar />
    <Box marginY="8">{children}</Box>
  </Container>
)

export default DefaultLayout
