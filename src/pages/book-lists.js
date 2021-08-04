import DefaultLayout from '@/layouts/DefaultLayout'
import { getListNames } from '@/libs/nytimes'
import { Heading, Link, ListItem, UnorderedList } from '@chakra-ui/react'
import NextLink from 'next/link'

function BookLists({ listNames = [] }) {
  return (
    <DefaultLayout>
      <Heading as="h1" size="lg">
        New York Times — Best Sellers
      </Heading>
      <UnorderedList mt="8">
        {listNames.map((listName) => (
          <ListItem key={listName.list_name_encoded}>
            <NextLink
              href={`/book-lists/${listName.list_name_encoded}`}
              passHref
            >
              <Link>{listName.display_name}</Link>
            </NextLink>
          </ListItem>
        ))}
      </UnorderedList>
    </DefaultLayout>
  )
}

// This function gets called at build time
export async function getStaticProps() {
  const response = await getListNames()

  const listNames = response?.results || []

  return {
    props: {
      listNames,
    },
  }
}

export default BookLists
