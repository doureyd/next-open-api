import { render, screen } from 'test-utils'
import LinkCard from '@/components/LinkCard'

describe('LinkCard', () => {
  let props

  beforeEach(() => {
    props = {
      children: 'children',
      linkHref: '/link_href',
    }
  })

  it('should render the children and the link', () => {
    const { getByText } = render(<LinkCard {...props} />)
    const children = getByText(props.children)
    const link = screen.getByRole('link')

    expect(children).toBeVisible()
    expect(link).toBeVisible()
    expect(link).toHaveAttribute('href', props.linkHref)
  })
})
