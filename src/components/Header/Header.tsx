import React from 'react'

type HeaderTypes = {
  search: any,
}

const Header: React.FC<HeaderTypes> = ({ search }) => {
  return (
    <form className='header'>
      <input onChange={search} />
    </form>
  )
}

export default Header
