import React, { useEffect, useMemo, useReducer, useState } from 'react'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Action from './types/Action'
import List from './types/List'
import Character from './types/Character'

const ACTIONS = {
  SAVE_DATA: 'SAVE_DATA',
  UPLOAD_DATA: 'UPLOAD_DATA',
}

const initialState = {
  count: 0,
  next: '',
  previous: '',
  results: [],
}

const reducer = (state: List, action: Action) => {
  switch(action.type) {
    case ACTIONS.SAVE_DATA:
      return action.payload
    case ACTIONS.UPLOAD_DATA:
      return {
        ...action.payload,
        results: [...state.results, ...action.payload.results]
      }
    default:
      return state
  }
}

const App = () => {
  const [data, dispatch] = useReducer(reducer, initialState)
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

  const getHeight = (height: string) => height !== 'unknown' ? parseInt(height) : 0

  const displayedList = useMemo(() => {
    if (!data || !data.results) return []
    if (query.search && toggle) return data.results.filter((item: Character) => (
      item.name.toLowerCase().includes(query.search) && getHeight(item.height) > 100
    ))
    if (query.search) return data.results.filter((item: Character) => item.name.toLowerCase().includes(query.search))
    if (toggle) return data.results.filter((item: Character) => getHeight(item.height) > 100)
    return data.results
  }, [data.results, query, toggle])

  const averageHeight = useMemo(() => {
    let sum = 0
    displayedList.forEach((item: Character) => {
      if(item.height !== 'unknown') sum += parseInt(item.height)
    })

    return Math.round(sum / displayedList.length * 100) / 100
  }, [displayedList])

  const search = (event: React.ChangeEvent<HTMLInputElement>) => (
    setQuery({ ...query, search: event.target.value.toLowerCase() })
  )

  const handleToogle = (event: React.ChangeEvent<HTMLInputElement>) => setToggle(event.target.checked)

  const loadMoreItems = async () => {
    if (data.next) {
      const response = await fetch(data.next)
      const responseJSON = await response.json()
      dispatch({ type: ACTIONS.UPLOAD_DATA, payload: responseJSON})
    }
  }

  return (
    <div className='app'>
      <Header search={search} />
      <Main list={displayedList} hasMoreItems={data.next} loadMoreItems={loadMoreItems} />
      <Footer handleToggle={handleToogle} averageHeight={averageHeight} />
    </div>
  );
}

export default App
