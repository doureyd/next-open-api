import { Flex, Heading, Text, Box } from '@chakra-ui/react'
import { SpotifyIcon, NewYorkTimesIcon } from '@/components/Icons'
import LinkCard from '@/components/LinkCard'
import DefaultLayout from '@/layouts/DefaultLayout'

const Home = () => (
  <DefaultLayout>
    <Heading>Next.js Open API Experiment</Heading>
    <LinkCard href="/podcasts" mt="8">
      <Flex>
        <SpotifyIcon alignSelf="center" boxSize={10} />
        <Box ml="3">
          <Heading as="h2" size="md">
            Search Spotify Podcasts &rarr;
          </Heading>
          <Text>
            Explore the huge Spotify podcast database, type some keywords to
            find your next favorite podcast.
          </Text>
        </Box>
      </Flex>
    </LinkCard>
    <LinkCard href="/book-lists" mt="4">
      <Flex>
        <NewYorkTimesIcon alignSelf="center" boxSize={10} />
        <Box ml="3">
          <Heading as="h2" size="md">
            Best Sellers Lists &rarr;
          </Heading>
          <Text>Explore The New York Times best seller lists.</Text>
        </Box>
      </Flex>
    </LinkCard>
  </DefaultLayout>
)

export default Home
