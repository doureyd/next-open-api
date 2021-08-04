import useSwr from 'swr'
import { useState } from 'react'
import { SimpleGrid, Heading } from '@chakra-ui/react'

import fetcher from '@/libs/fetcher'
import useDebounce from '@/libs/useDebounce'
import SearchInput from '@/components/SearchInput'
import Card from '@/components/Card'
import DefaultLayout from '@/layouts/DefaultLayout'

const PAGE_SIZE = 16

const Podcasts = () => {
  const [searchInput, setSearchInput] = useState('Daniel Schmachtenberger')
  const searchQuery = useDebounce(searchInput, 1000)

  const handleChange = (e) => setSearchInput(e.target.value)

  const { data, error, isValidating } = useSwr(
    `/api/podcasts?q=${searchQuery}&limit=${PAGE_SIZE}`,
    fetcher
  )

  const podcasts = data?.episodes?.items.filter((episode) => episode) || []

  const isEmpty = !isValidating && !!searchQuery && podcasts.length === 0

  return (
    <DefaultLayout>
      <SearchInput
        mt="8"
        value={searchInput}
        handleChange={handleChange}
        placeholder="Search Spotify Podcasts..."
      />
      {isEmpty ? <p>No podcasts found.</p> : null}
      {error ? <p>Something went wrong.</p> : null}
      <SimpleGrid mt="8" columns={[2, null, 4]} spacing="20px">
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
