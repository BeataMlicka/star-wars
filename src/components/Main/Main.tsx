import React from 'react'

import Character from '../../types/Character'
import Item from './Item'

type MainTypes = {
  list: Array<Character>,
}

const Main: React.FC<MainTypes> = ({ list }) => {
  if(!list || !list.length) return <div>List is empty</div>
  return (
    <div className='main'>
      {
        list.map(item => <Item item={item} />)
      }
    </div>
  )
}

export default Main
