import { ACTIONS } from './App'
import Action from './types/Action'
import Character from './types/Character'
import List from './types/List'

const list = [
  {
    name: 'Anakin',
    height: '150',
    created: '12.03.2021',
  },
  {
    name: 'Small Anakin',
    height: '90',
    created: '12.03.2021',
  },
  {
    name: 'Obi-Wan',
    height: '176',
    created: '10.03.2021',
  },
  {
    name: 'Jar Jar',
    height: '200',
    created: '11.03.2021',
  },
  {
    name: 'Somebody Else',
    height: 'unknown',
    created: '19.03.2021',
  },
]

const fetchData = () => {
  return new Promise((resolve, reject) => {
    resolve('success')
  })
}

const TestReducer = (state: List, action: Action) => {
  switch (action.type) {
    case ACTIONS.SAVE_DATA: {
      return action.payload
    }
    case ACTIONS.UPLOAD_DATA: {
      return {
        ...action.payload,
        results: [...state.results, ...action.payload.results]
      }
    }
    default:
      return state
  }
}

const testGetHeight = (height: string) => height !== 'unknown' ? parseInt(height) : 0

const testDisplayedList = (data: List, searchQuery: string, toggle: boolean) => {
  if (!data || !data.results) return []
  if (searchQuery && toggle) return data.results.filter((item: Character) => (
    item.name.toLowerCase().includes(searchQuery) && testGetHeight(item.height) > 100
  ))
  if (searchQuery) return data.results.filter((item: Character) => item.name.toLowerCase().includes(searchQuery))
  if (toggle) return data.results.filter((item: Character) => testGetHeight(item.height) > 100)
  return data.results
}

const testAverageHeight = (list: Array<Character>) => {
  const values: Array<number> = []

  list.forEach((item: Character) => {
    if(item.height === 'unknown') values.push(0)
    else values.push(parseInt(item.height))
  })

  const min = Math.min(...values)
  const max = Math.max(...values)

  const newArray = values.filter(item => item !== min && item !== max)
  let sum = 0

  newArray.forEach(item => sum += item)

  return Math.round(sum / newArray.length * 100) / 100
}

describe('App component', () => {

  test('fetch data', async () => {
    const data = await fetchData()
    expect(data).toBe('success')
  })

  test('reducer test', () => {
    const initialState = { count: 3, next: '', previous: '', results: list }
    const updateAction = {type: ACTIONS.SAVE_DATA, payload: { count: 45, next: '', previous: '', results: list }}
    const updatedState = TestReducer(initialState, updateAction)
  
    expect(updatedState.count).toBe(45)

    const uploadAction = {
      type: ACTIONS.UPLOAD_DATA,
      payload: { count: 4, next: '', previous: '', results: [{ name: 'Leila', height: '164', created: '24.11.2022' }] }
    }

    const uploadedState = TestReducer(initialState, uploadAction)

    expect(uploadedState.results.length).toBe(list.length + 1)
  })

  test('testGetHeight function without height', () => {
    expect(testGetHeight(list[4].height)).toBe(0)
  })

  test('testGetHeight function with height', () => {
    expect(testGetHeight(list[0].height)).toBe(150)
  })

  test('displayedList withoud data', () => {
    expect(testDisplayedList({ count: 1, next: '', previous: '', results: [] }, '', false).length).toBe(0)
  })

  test('displayedList with searchQuery and true toogle', () => {
    expect(testDisplayedList({ count: 1, next: '', previous: '', results: list }, 'a', true)[0].name).toBe('Anakin')
  })

  test('displayedList with searchQuery and false toogle', () => {
    expect(testDisplayedList({ count: 1, next: '', previous: '', results: list }, 'ana', false).length).toBe(2)
  })

  test('averageHeoght test', () => {
    expect(testAverageHeight(list)).toBe(138.67)
  })
})
