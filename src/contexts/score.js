import { createContext } from 'react'

const ScoreContext = createContext({
  setScore: () => {},
  setHighestScore: () => {}
})

export default ScoreContext
