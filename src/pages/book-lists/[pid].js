import { SimpleGrid, Heading } from '@chakra-ui/react'

import Card from '@/components/Card'
import DefaultLayout from '@/layouts/DefaultLayout'
import { getListData, getListNames } from '@/libs/nytimes'

const BookList = ({ books = [], listName = '' }) => {
  const isEmpty = books.length === 0

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
        {books.map((book) => (
          <Card
            title={book.title}
            image={book.book_image}
            imageAlt={book.title}
            link={book.amazon_product_url}
            ratio={3 / 4}
            key={book.rank}
          />
        ))}
      </SimpleGrid>
    </DefaultLayout>
  )
}

// This function gets called at build time
export async function getStaticProps({ params }) {
  const { books, listName } = await getListData(params.pid)

  return {
    props: {
      books,
      listName,
    },
    revalidate: 60 * 60,
  }
}

export async function getStaticPaths() {
  const { listNames } = await getListNames()

  const paths = listNames.map((listName) => {
    return {
      params: {
        pid: listName.list_name_encoded,
      },
    }
  })

  return {
    paths,
    fallback: 'blocking',
  }
}

export default BookList
