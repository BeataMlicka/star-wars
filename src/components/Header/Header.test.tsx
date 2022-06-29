import { render, screen } from '@testing-library/react'

import Header from './Header'

describe('Header component', () => {
  test('render search input', () => {
    render(<Header search={() => null} />)
    const searchInputEl = screen.getByRole('textbox')
    expect(searchInputEl).toBeInTheDocument()
  })
})
