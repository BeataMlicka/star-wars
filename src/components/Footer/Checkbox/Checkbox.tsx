import React, { useEffect, useState, useRef } from 'react'

type CheckboxTypes = {
  onChange: any,
}

const Checkbox: React.FC<CheckboxTypes> = ({ onChange }) => {
  const [checkboxState, setChecboxState] = useState(false)
  const [checkboxFocus, setChecboxFocus] = useState(false)

  const handleCheckboxChange = (event: any) => {
    setChecboxState(event.target.checked)
    onChange(event)
  }

  console.log('CH ', checkboxFocus)

  return (
    <div className={`checkbox ${checkboxFocus ? 'checkbox--focus' : ''}`}>
      <input
        type='checkbox'
        onChange={handleCheckboxChange}
        onFocus={() => setChecboxFocus(true)}
        onBlur={() => setChecboxFocus(false)}
      />
      <div className={`checkbox__button ${checkboxState ? 'checkbox__button--checked' : ''}`} />
    </div>
  )
}

export default Checkbox
