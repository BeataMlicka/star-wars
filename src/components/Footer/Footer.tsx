import React, { useState } from 'react'

import Checkbox from './Checkbox'

type FooterTypes = {
  handleToggle: any,
}

const Footer: React.FC<FooterTypes> = ({ handleToggle }) => {
  const onChange = (event: any) => {
    handleToggle(event)
  }

  return (
    <form className='footer'>
      Include only tall
      <Checkbox onChange={onChange} />
    </form>
  )
}

export default Footer
