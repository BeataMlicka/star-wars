import React from 'react'

import Character from '../../types/Character'
import Item from './Item'

type MainTypes = {
  list: Array<Character> | null,
  nextPage?: string,
  loadMoreItems: () => void,
}

const Main: React.FC<MainTypes> = ({ list, loadMoreItems, nextPage }) => (
  <div className='main'>
    {
      !list || !list.length
        ? <div className='main__empty-list'>List is empty</div>
        : (
          <>
            <div className='main__list'>
              {
                list.map(item => <Item key={item.created} item={item} />)
              }
            </div>
            <div className='main__panel'>
              {
                nextPage
                ? <button onClick={loadMoreItems}>Load more characters</button>
                : <span>There are no more characters</span>
              }
            </div>
          </>
        )
    }
  </div>
)

export default Main
