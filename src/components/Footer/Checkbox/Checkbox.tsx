import React, { useState } from 'react'

type CheckboxTypes = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

const Checkbox: React.FC<CheckboxTypes> = ({ onChange }) => {
  const [checkbox, setChecbox] = useState({ isChecked: false, isFocused: false })

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecbox({ ...checkbox, isChecked: event.target.checked })
    onChange(event)
  }

  return (
    <div className={`checkbox ${checkbox.isFocused ? 'checkbox--focus' : ''}`}>
      <input
        type='checkbox'
        onChange={handleCheckboxChange}
        onFocus={() => setChecbox({ ...checkbox, isFocused: true })}
        onBlur={() => setChecbox({ ...checkbox, isFocused: false })}
      />
      <div className={`checkbox__button ${checkbox.isChecked ? 'checkbox__button--checked' : ''}`} />
    </div>
  )
}

export default Checkbox
