import { useState } from 'react'

import Border from './components/border'
import Board from './components/board'
import Logo from './components/logo'
import Score from './components/score'

import GameStatusContext from './contexts/gameStatus'
import ScoreContext from './contexts/score'

function App() {
  const [score, setScore] = useState(0)
  const [highestScore, setHighestScore] = useState(0)

  const [started, setStarted] = useState(false)

  return (
    <GameStatusContext.Provider value={{started, setStarted}}>
    <ScoreContext.Provider value={{setScore, setHighestScore}}>

      <Score
        score={score}
        highestScore={highestScore}
      />

      <Border>
        <Board />

        {/* absolute over board */}
        {!started && <Logo />}
      </Border>

    </ScoreContext.Provider>
    </GameStatusContext.Provider>
  )
}

export default App
