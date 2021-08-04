import NextLink from 'next/link'
import { Box, LinkBox, LinkOverlay } from '@chakra-ui/react'

const LinkCard = ({ children, href, ...props }) => (
  <LinkBox shadow="md" borderWidth="1px" borderRadius="lg" {...props}>
    <NextLink href={href} passHref>
      <LinkOverlay>
        <Box m="3.5">{children}</Box>
      </LinkOverlay>
    </NextLink>
  </LinkBox>
)

export default LinkCard
