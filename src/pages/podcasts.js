import useSwr from 'swr'
import { useState } from 'react'
import { SimpleGrid, Text } from '@chakra-ui/react'

import fetcher from '@/libs/fetcher'
import useDebounce from '@/libs/useDebounce'
import SearchInput from '@/components/SearchInput'
import Card from '@/components/Card'
import DefaultLayout from '@/layouts/DefaultLayout'

const PAGE_SIZE = 50

const Podcasts = () => {
  const [searchInput, setSearchInput] = useState('Schmachtenberger')
  const searchQuery = useDebounce(searchInput, 1000)

  const handleChange = (e) => setSearchInput(e.target.value)

  const { data, error, isValidating } = useSwr(
    `/api/podcasts?q=${searchQuery}&limit=${PAGE_SIZE}`,
    fetcher
  )

  const podcasts = data?.episodes?.items.filter((episode) => episode) || []

  const isEmpty =
    !isValidating && !!searchQuery && podcasts.length === 0 && !error

  return (
    <DefaultLayout>
      <SearchInput
        value={searchInput}
        handleChange={handleChange}
        placeholder="Search Podcasts..."
      />
      <SimpleGrid columns={[2, null, 4]} spacing="20px" marginY="8">
        {isEmpty ? <Text>No podcasts found.</Text> : null}
        {error ? <Text>Something went wrong.</Text> : null}
        {podcasts.map((episode) => (
          <Card
            title={episode.name}
            image={episode.images[0].url}
            link={episode.external_urls.spotify}
            key={episode.id}
          />
        ))}
      </SimpleGrid>
    </DefaultLayout>
  )
}

export default Podcasts
