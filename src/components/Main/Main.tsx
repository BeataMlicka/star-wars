import React from 'react'

import Character from '../../types/Character'
import Item from './Item'

type MainTypes = {
  list: Array<Character>,
  hasMoreItems?: string,
  loadMoreItems: () => void,
}

const Main: React.FC<MainTypes> = ({ list, loadMoreItems, hasMoreItems }) => (
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
                hasMoreItems
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
