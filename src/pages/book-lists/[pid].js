import useSwr from 'swr'
import { useRouter } from 'next/router'
import { SimpleGrid, Heading } from '@chakra-ui/react'

import Card from '@/components/Card'
import DefaultLayout from '@/layouts/DefaultLayout'
import fetcher from '@/libs/fetcher'

const BookList = () => {
  const router = useRouter()
  const { pid } = router.query

  const { data, error, isValidating } = useSwr(
    `/api/book-lists/${pid}`,
    fetcher
  )

  const books = data?.results?.books.filter((book) => book) || []
  const listName = data?.results?.display_name || ''

  const isEmpty = !isValidating && books.length === 0

  return (
    <DefaultLayout>
      <Heading as="h1" mb="4" size="lg">
        {listName}
      </Heading>
      <Heading as="h2" color="gray.500" size="md" mb="8">
        New York Times — Best Sellers
      </Heading>
      <SimpleGrid columns={[2, null, 4]} spacing="20px" pb="8">
        {isEmpty ? <p>No books found for this list</p> : null}
        {error ? <p>Something went wrong.</p> : null}
        {books.map((book) => (
          <Card
            title={book.title}
            image={book.book_image}
            link={book.amazon_product_url}
            ratio={3 / 4}
            key={book.rank}
          />
        ))}
      </SimpleGrid>
    </DefaultLayout>
  )
}

export default BookList
