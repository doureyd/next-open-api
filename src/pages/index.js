import { Flex, Heading, Text, Box } from '@chakra-ui/react'
import { SpotifyIcon, NewYorkTimesIcon } from '@/components/Icons'
import LinkCard from '@/components/LinkCard'
import DefaultLayout from '@/layouts/DefaultLayout'

const Home = () => (
  <DefaultLayout>
    <Heading as="h1" size="lg">
      Next.js Open API Experiment
    </Heading>
    <LinkCard linkHref="/podcasts" mt="8">
      <Flex>
        <SpotifyIcon alignSelf="center" boxSize={10} />
        <Box ml="3">
          <Heading as="h2" size="sm">
            Search Spotify Podcasts &rarr;
          </Heading>
          <Text mt="2">
            Explore the huge Spotify podcast database, type some keywords to
            find your next favorite podcast.
          </Text>
        </Box>
      </Flex>
    </LinkCard>
    <LinkCard linkHref="/book-lists" mt="4">
      <Flex>
        <NewYorkTimesIcon alignSelf="center" boxSize={10} />
        <Box ml="3">
          <Heading as="h2" size="sm">
            Best Sellers Lists &rarr;
          </Heading>
          <Text mt="2">
            Explore The New York Times best seller lists and the related books.
          </Text>
        </Box>
      </Flex>
    </LinkCard>
  </DefaultLayout>
)

export default Home
