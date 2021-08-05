import PropTypes from 'prop-types'
import {
  GridItem,
  LinkBox,
  LinkOverlay,
  Image,
  AspectRatio,
  Text,
  Flex,
} from '@chakra-ui/react'

const Card = ({ title, imageSrc, linkHref, ratio, imageFallback }) => (
  <LinkBox>
    <GridItem
      shadow="md"
      borderWidth="1px"
      borderRadius="lg"
      height="100%"
      position="relative"
      _hover={{
        top: '-4px',
      }}
    >
      <LinkOverlay href={linkHref} isExternal>
        <AspectRatio ratio={ratio}>
          <Image
            src={imageSrc}
            alt={title}
            fallbackSrc={imageFallback}
            borderTopRadius="lg"
            objectFit="cover"
          />
        </AspectRatio>
        <Flex m="3.5">
          <Text
            fontWeight="semibold"
            fontSize={['sm', null, 'md']}
            noOfLines={[2, null, 3]}
          >
            {title}
          </Text>
        </Flex>
      </LinkOverlay>
    </GridItem>
  </LinkBox>
)

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  linkHref: PropTypes.string.isRequired,
  ratio: PropTypes.number,
  imageFallback: PropTypes.string,
}

Card.defaultProps = {
  imageFallback: 'https://via.placeholder.com/200/000/000',
  ratio: 1,
}

export default Card
