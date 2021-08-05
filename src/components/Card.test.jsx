import Card from '@/components/Card'
import { render } from 'test-utils'

describe('Card', () => {
  let props

  beforeEach(() => {
    props = {
      title: 'Title',
      image: 'image_url',
      link: 'card_link',
    }
  })

  test('should render title and image', () => {
    const { getByText, getByAltText } = render(<Card {...props} />)
    const title = getByText(props.title)
    const image = getByAltText(props.title)

    expect(title).toBeVisible()
    expect(image).toBeVisible()
  })
})
