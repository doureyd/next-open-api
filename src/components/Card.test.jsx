import Card from '@/components/Card'
import { render } from '@/jest.setup'

describe('Card', () => {
  let props

  beforeEach(() => {
    props = {
      title: 'Title',
      image: 'https://via.placeholder.com/200/fff/fff',
      link: 'https://googel.com',
      ratio: 1,
    }
  })

  test('should render props properly', () => {
    const { getByText, getByAltText } = render(<Card {...props} />)
    const title = getByText(props.title)
    const image = getByAltText(props.title)

    expect(title).toBeVisible()
    expect(image).toBeVisible()
  })
})
