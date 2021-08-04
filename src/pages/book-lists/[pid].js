import { useRouter } from 'next/router'

const BookList = () => {
  const router = useRouter()
  const { pid } = router.query

  return (
    <div>
      <h1>Book List: {pid}</h1>
    </div>
  )
}

export default BookList
