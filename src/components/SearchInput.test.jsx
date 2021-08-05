import { render, screen, fireEvent } from 'test-utils'
import SearchInput from '@/components/SearchInput'

describe('SearchInput', () => {
  let props

  beforeEach(() => {
    props = {
      value: 'value',
      handleChange: jest.fn(),
      placeholder: 'placeholder',
    }
  })

  it('should render the input and trigger handleChange on input change', () => {
    render(<SearchInput {...props} />)
    const input = screen.getByDisplayValue('value')

    expect(input).toBeVisible()

    fireEvent.change(input, { target: { value: 'hello' } })
    expect(props.handleChange).toHaveBeenCalled()
  })
})
