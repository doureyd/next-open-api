import PropTypes from 'prop-types'
import NextLink from 'next/link'
import { Box, LinkBox, LinkOverlay } from '@chakra-ui/react'

const LinkCard = ({ children, linkHref, ...props }) => (
  <LinkBox shadow="md" borderWidth="1px" borderRadius="lg" {...props}>
    <NextLink href={linkHref} passHref>
      <LinkOverlay>
        <Box m="3.5">{children}</Box>
      </LinkOverlay>
    </NextLink>
  </LinkBox>
)

LinkCard.propTypes = {
  children: PropTypes.node.isRequired,
  linkHref: PropTypes.string.isRequired,
}

export default LinkCard
