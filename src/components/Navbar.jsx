import { Flex } from '@chakra-ui/react'
import NavLink from '@/components/NavLink'

const Navbar = () => (
  <Flex width="100%" as="nav" paddingY="6">
    <NavLink href="/" passHref>
      Home
    </NavLink>
    <NavLink href="/podcasts" passHref>
      Podcasts
    </NavLink>
    <NavLink href="/book-lists" passHref>
      Book Lists
    </NavLink>
  </Flex>
)

export default Navbar
