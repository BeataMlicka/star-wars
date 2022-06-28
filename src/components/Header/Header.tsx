import React from 'react'

type HeaderTypes = {
  search: React.ChangeEventHandler<HTMLInputElement>,
}

const Header: React.FC<HeaderTypes> = ({ search }) => (
  <form className='header'>
    <input type='text' onChange={search} />
  </form>
)

export default Header
