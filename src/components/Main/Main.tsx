import React from 'react'

import Character from '../../types/Character'
import Item from './Item'

type MainTypes = {
  list: Array<Character>,
}

const Main: React.FC<MainTypes> = ({ list }) => {
  if(!list.length) return null
  return (
    <div className='main'>
      {
        list.map((item) => <Item />)
      }
    </div>
  )
}

export default Main
