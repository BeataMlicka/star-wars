import React from 'react'

import Character from '../../types/Character'
import Item from './Item'

type MainTypes = {
  list: Array<Character>,
  hasMoreItems?: string,
  loadMoreItems: any,
}

const Main: React.FC<MainTypes> = ({ list, loadMoreItems, hasMoreItems }) => {
  if(!list || !list.length) return <div>List is empty</div>
  return (
    <div className='main'>
      <div className='main__panel'>
        {
          hasMoreItems
          ? <button onClick={loadMoreItems}>Load more characters</button>
          : <span>There are no more characters</span>
        }
      </div>
      <div className='main__list'>
        {
          list.map(item => <Item item={item} />)
        }
      </div>
    </div>
  )
}

export default Main
