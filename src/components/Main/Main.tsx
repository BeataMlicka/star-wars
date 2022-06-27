import React from 'react'

import Character from '../../types/Character'

type MainTypes = {
  list: Array<Character>,
}

const Main: React.FC<MainTypes> = ({ list }) => {

  console.log('LIST - ', list)
  if(!list.length) return null
  return (
    <div className='main'>
      Hello World
    </div>
  )
}

export default Main
