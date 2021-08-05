import React from 'react'
import Navbar from '@/components/Navbar'
import { render } from 'test-utils'

jest.mock('next/router', () => ({
  useRouter: () => ({
    asPath: '/',
  }),
}))

describe('Navbar', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Navbar />)

    expect(asFragment()).toMatchSnapshot()
  })
})
