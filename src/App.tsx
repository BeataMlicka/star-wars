import React, { useEffect, useMemo, useReducer, useState } from 'react'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

const ACTIONS = {
  SAVE_DATA: 'SAVE_DATA',
}

const reducer = (state: any, action: any) => {
  switch(action.type) {
    case ACTIONS.SAVE_DATA:
      console.log('SAVE DATA - ', action)
      return action.payload
    default:
      return state
  }
}

const App = () => {
  const [data, dispatch] = useReducer(reducer, {})
  const [query, setQuery] = useState<{ search: string }>({ search: '' })
  const [toggle, setToggle] = useState(false)

  const fetchData = async () => {
    const response = await fetch('https://swapi.dev/api/people/')
    const responseJSON = await response.json()
    dispatch({ type: ACTIONS.SAVE_DATA, payload: responseJSON})
  }

  useEffect(() => {
    fetchData()
  }, [])

  const displayedList = useMemo(() => {
    if (!data || !data.results) return []
    if (query.search && toggle) return data.results.filter((item: any) => (
      item.name.toLowerCase().includes(query.search) && item.height > 100
    ))
    if (query.search) return data.results.filter((item: any) => item.name.toLowerCase().includes(query.search))
    if (toggle) return data.results.filter((item: any) => item.height > 100)
    return data.results
  }, [data.results, query, toggle])

  const search = (event: any) => setQuery({ ...query, search: event.target.value.toLowerCase() })
  const handleToogle = (event: any) => setToggle(event.target.checked)

  return (
    <div className='app'>
      <Header search={search} />
      <Main list={displayedList} />
      <Footer handleToggle={handleToogle} />
    </div>
  );
}

export default App
