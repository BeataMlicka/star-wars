import React, { useState } from 'react'

type CheckboxTypes = {
  onChange: any,
}

const Checkbox: React.FC<CheckboxTypes> = ({ onChange }) => {
  const [checkboxState, setChecboxState] = useState(false)

  const handleCheckboxChange = (event: any) => {
    setChecboxState(event.target.checked)
    onChange(event)
  }

  return (
    <div className='checkbox'>
      <input type='checkbox' onChange={handleCheckboxChange} />
      <div className={`checkbox__button ${checkboxState ? 'checkbox__button--checked' : ''}`} />
    </div>
  )
}

export default Checkbox
