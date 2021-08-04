import {
  GridItem,
  LinkBox,
  LinkOverlay,
  Image,
  AspectRatio,
  Text,
  Flex,
} from '@chakra-ui/react'

const Card = ({ title, image, link, ratio = 1 }) => (
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
      <LinkOverlay href={link} isExternal>
        <AspectRatio ratio={ratio}>
          <Image
            src={image}
            alt={title}
            fallbackSrc="https://via.placeholder.com/200/000/000"
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

export default Card
