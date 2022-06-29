import { render, screen } from '@testing-library/react'

import Main from './Main'

const emptyList = null

const list = [
  {
    name: 'Anakin',
    height: '175',
    created: '12.03.2021',
  },
  {
    name: 'Obi-Wan',
    height: '169',
    created: '10.03.2021',
  },
  {
    name: 'Jar Jar',
    height: '200',
    created: '11.03.2021',
  },
]

describe('Main component', () => {
  test('render empty list message if there are no items', () => {
    render(<Main list={emptyList} nextPage={'test-address'} loadMoreItems={() => null} />)
    const emptyListMessage = screen.getByText(/List is empty :\(/i)
    expect(emptyListMessage).toBeInTheDocument()
  })

  test('render list', () => {
    render(<Main list={list} nextPage={'test-address'} loadMoreItems={() => null} />)
    list.forEach((item) => {
      const listEl = screen.getByText(item.name)
      expect(listEl).toBeInTheDocument()
    })
  })

  test('render load more button', () => {
    render(<Main list={list} nextPage={'test-address'} loadMoreItems={() => null} />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  test('render no more items to load message', () => {
    render(<Main list={list} nextPage={undefined} loadMoreItems={() => null} />)
    const message = screen.getByText(/There are no more characters/i)
    expect(message).toBeInTheDocument()
  })
})
