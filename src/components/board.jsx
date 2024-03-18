import { useCallback, useState } from 'react'
import useGameStatus from '../hooks/useGameStatus'
import useScores from '../hooks/useScores'

import './board.scss'

const GRID_SIZE = 20

function Board() {
  const [snake, setSnake] = useState([{x: 10, y: 10}])
  const [food, setFood] = useState()

  const {started, setStarted} = useGameStatus()
  const {setScore, setHighestScore} = useScores()

  const generateRandomFood = useCallback(() => {
    setFood({
      x: Math.floor(Math.random() * GRID_SIZE) + 1,
      y: Math.floor(Math.random() * GRID_SIZE) + 1,
    })
  }, [])
  
  return (
    <div className="board">

      {/* snake rendering */}
      {snake.map((segment, index) => {
        return (
          <div
            key={`${index}_segment`}
            className="snake-part"
            style={{
              gridColumn: segment.x,
              gridRow: segment.y,
            }}
          />   
        )
      })}

      {/* food rendering */}
      {started && food !== undefined && (
        <div
          className='food'
          style={{
            gridColumn: food.x,
            gridRow: food.y,
          }}
        />
      )}
    </div>
  )
}

export default Board
