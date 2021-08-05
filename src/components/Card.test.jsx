import { render, screen } from 'test-utils'
import Card from '@/components/Card'

describe('Card', () => {
  let props

  beforeEach(() => {
    props = {
      title: 'Title',
      imageSrc: '/image_src',
      linkHref: '/link_href',
      imageFallback: '/image_faalback',
    }
  })

  it('should render title, image and link', () => {
    const { getByText, getByAltText } = render(<Card {...props} />)
    const title = getByText(props.title)
    const image = getByAltText(props.title)
    const link = screen.getByRole('link')

    expect(title).toBeVisible()
    expect(image).toBeVisible()
    expect(image).toHaveAttribute('src', props.imageFallback)
    expect(link).toHaveAttribute('href', props.linkHref)
  })
})
