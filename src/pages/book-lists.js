import DefaultLayout from '@/layouts/DefaultLayout'
import { getListNames } from '@/libs/nytimes'
import NextLink from 'next/link'
import {
  Heading,
  Link,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react'
import { useMemo } from 'react'

function BookLists({ listNames = [] }) {
  const sortedListNames = useMemo(
    () =>
      listNames.sort((a, b) => a.display_name.localeCompare(b.display_name)),
    [listNames]
  )

  return (
    <DefaultLayout>
      <Heading as="h1" size="lg">
        New York Times — Best Sellers
      </Heading>
      <Table size="sm" mt="8">
        <Thead>
          <Tr>
            <Th>List Name</Th>
            <Th>Update Frequency</Th>
            <Th>Last Updated</Th>
          </Tr>
        </Thead>
        <Tbody>
          {sortedListNames.sort().map((listName) => (
            <Tr key={listName.list_name_encoded}>
              <Td>
                <NextLink
                  href={`/book-lists/${listName.list_name_encoded}`}
                  passHref
                >
                  <Link>{listName.display_name}</Link>
                </NextLink>
              </Td>
              <Td>{listName.updated}</Td>
              <Td>{new Date(listName.newest_published_date).toDateString()}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
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
