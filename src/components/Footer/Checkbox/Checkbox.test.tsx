import { render, screen } from '@testing-library/react'

import Checkbox from './Checkbox'

test('checkbox input should be rendered', () => {
  render(<Checkbox onChange={() => null} />)
  const checkboxInputEl = screen.getByRole('checkbox')
  expect(checkboxInputEl).toBeInTheDocument()
})
