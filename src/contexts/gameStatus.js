import { createContext } from 'react'

const GameStatusContext = createContext({
  started: false,
  setStarted: () => {}
})

export default GameStatusContext
