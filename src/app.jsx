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
     <div>
      <Score
        score={score}
        highestScore={highestScore}
      />
      <Border>
        <Board />
      </Border>
     </div>

     <Logo />
    </ScoreContext.Provider>
  )
}

export default App
