import DefaultLayout from '@/layouts/DefaultLayout'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { Button, Heading, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

const FourOhFour = () => {
  return (
    <DefaultLayout>
      <Heading as="h1" size="lg">
        404 - Page Not Found
      </Heading>
      <NextLink href="/">
        <Button mt="8" leftIcon={<ArrowBackIcon />} variant="outline">
          Go back home
        </Button>
      </NextLink>
    </DefaultLayout>
  )
}

export default FourOhFour
