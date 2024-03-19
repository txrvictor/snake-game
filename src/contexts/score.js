import { createContext } from 'react'

const ScoreContext = createContext({
  score: 0,
  setScore: () => {},
  setHighestScore: () => {}
})

export default ScoreContext
