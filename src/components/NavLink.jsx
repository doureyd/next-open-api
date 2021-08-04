import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const NavLink = ({ children, href }) => {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <NextLink href={href} passHref>
      <Link
        onClick={handleClick}
        color={router.asPath === href ? 'blue.500' : 'black'}
        mr="4"
        fontWeight="bold"
        _hover={{ textDecoration: 'none' }}
      >
        {children}
      </Link>
    </NextLink>
  )
}

export default NavLink
