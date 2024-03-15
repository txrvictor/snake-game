import { useState } from 'react'

import Border from './components/border'
import Board from './components/board'
import Logo from './components/logo'
import Score from './components/score'

import ScoreContext from './contexts/score'

function App() {
  const [score, setScore] = useState(0)
  const [highestScore, setHighestScore] = useState(0)

  return (
    <ScoreContext.Provider value={{setScore, setHighestScore}}>
    <Score
      score={score}
      highestScore={highestScore}
    />
    <Border>
      <Board />

      {/* absolute over board */}
      <Logo />
    </Border>

    </ScoreContext.Provider>
  )
}

export default App
