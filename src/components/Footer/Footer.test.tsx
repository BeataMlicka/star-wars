import { render, screen } from '@testing-library/react'

import Footer from './Footer'

describe('Footer component', () => {
  test('render checkbox description', () => {
    render(<Footer averageHeight={115} handleToggle={() => null} />)
    const checkboxTitle = screen.getByText(/Include only tall/i)
    expect(checkboxTitle).toBeInTheDocument()
  })

  test('render average description', () => {
    render(<Footer averageHeight={115} handleToggle={() => null} />)
    const averageTitle = screen.getByText(/Average of height:/i)
    expect(averageTitle).toBeInTheDocument()
  })
      
  test('display averageHeight', () => {
    const averageHeight = 115
    render(<Footer averageHeight={averageHeight} handleToggle={() => null} />)
    const average = screen.getByText(averageHeight)
    expect(average).toBeInTheDocument()
  })
})
