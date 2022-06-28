import React, { useEffect, useMemo, useReducer, useState } from 'react'

import Header from './components/Header'
import Main from './components/Main'

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
    if (data.results && query.search) data.results.filter((item: any) => item.name.toLowerCase().includes(query.search))
    return data.results
  }, [data.results, query])

  const search = (event: any) => setQuery({ ...query, search: event.target.value.toLowerCase() })

  return (
    <div className="App">
      <Header search={search} />
      <Main list={displayedList} />
    </div>
  );
}

export default App
