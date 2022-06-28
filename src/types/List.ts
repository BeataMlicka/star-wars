import Character from './Character'

interface List {
  count: number,
  next?: string,
  previous?: string,
  results: Array<Character>,
}

export default List
