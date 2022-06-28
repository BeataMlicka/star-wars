import React from 'react'

import Character from '../../../types/Character'

type ItemTypes = {
  item: Character,
}

const Item: React.FC<ItemTypes> = ({ item }) => (
  <div className='item' >
    <div className='item__top'>
      {item.height === 'unknown' ? '-' : item.height}
    </div>
    <div className='item__bottom'>
      {item.name}
    </div>
  </div>
)

export default Item
