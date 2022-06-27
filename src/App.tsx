import React, { useEffect, useReducer } from 'react'

const ACTIONS = {
  SAVE_DATA: 'SAVE_DATA',
}

const reducer = (state: any, action: any) => {
  switch(action.type) {
    case ACTIONS.SAVE_DATA:
      console.log('SAVE DATA - ', action)
      return action.payload.results
    default:
      return state
  }
}

const App = () => {
  const [data, dispatch] = useReducer(reducer, {})

  const fetchData = async () => {
    const response = await fetch('https://swapi.dev/api/people/')
    const responseJSON = await response.json()
    dispatch({ type: ACTIONS.SAVE_DATA, payload: responseJSON})
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
    </div>
  );
}

export default App
