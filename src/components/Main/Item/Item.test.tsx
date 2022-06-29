import { render, screen } from '@testing-library/react'

import Item from './Item'

const testItem = {
  name: 'Anakin',
  height: '176',
  created: '23.12.2022',
}

const testUnknownItem = {
  name: 'Obi-Wan',
  height: 'unknown',
  created: '23.12.2021',
}

describe('Item component', () => {
  test('render name', () => {
    render(<Item item={testItem} />)
    const name = screen.getByText(testItem.name)
    expect(name).toBeInTheDocument()
  })

  test('render height', () => {
    render(<Item item={testItem} />)
    const height = screen.getByText(testItem.height)
    expect(height).toBeInTheDocument()
  })

  test('render - if there is no name', () => {
    render(<Item item={testUnknownItem} />)
    const height = screen.getByText('-')
    expect(height).toBeInTheDocument()
  })
})
