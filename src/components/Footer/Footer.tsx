import React from 'react'

import Checkbox from './Checkbox'

type FooterTypes = {
  averageHeight: number,
  handleToggle: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

const Footer: React.FC<FooterTypes> = ({ averageHeight, handleToggle }) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleToggle(event)
  }

  return (
    <form className='footer'>
      <div className='footer__toggle'>
        <span>Include only tall</span>
        <Checkbox onChange={onChange} />
      </div>
      <div className='footer__average'>
        <span>Average of height: </span>
        {averageHeight}
      </div>
    </form>
  )
}

export default Footer
