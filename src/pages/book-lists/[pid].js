import DefaultLayout from '@/layouts/DefaultLayout'
import { Heading } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const BookList = () => {
  const router = useRouter()
  const { pid } = router.query

  return (
    <DefaultLayout>
      <Heading>Book List — {pid}</Heading>
    </DefaultLayout>
  )
}

export default BookList
