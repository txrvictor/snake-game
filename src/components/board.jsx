import { useCallback, useEffect, useRef, useState } from 'react'
import useScores from '../hooks/useScores'
import Logo from './components/logo'

import './board.scss'

const GRID_SIZE = 20

function Board() {
  const [isRunning, setIsRunning] = useState(false)
  const [runningDelay, setRunningDelay] = useState(200)

  const [snake, setSnake] = useState([{x: 10, y: 10}])
  const [food, setFood] = useState()

  const runningInterval = useRef()

  const {score, setScore, setHighestScore} = useScores()

  useEffect(() => {
    clearInterval(runningInterval.current)

    if (isRunning) {
      runningInterval.current = setInterval(() => {
        // move()
        // checkCollision()
      }, runningDelay)
    }

    // clean up on unmount
    return () => {
      clearInterval(runningInterval.current)
    }
  }, [isRunning, runningDelay])

  useEffect(() => {
    const head = snake[0]

    if (head.x === food?.x && head.y === food?.y) {
      // generate random food
      setFood({
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1,
      })
      // increase game speed
      setRunningDelay((prevSpeed) => {
        let speed = prevSpeed
        if (prevSpeed > 150) {
          speed -= 5;
        } else if (prevSpeed > 100) {
          speed -= 3;
        } else if (prevSpeed > 50) {
          speed -= 2;
        } else if (prevSpeed > 25) {
          speed -= 1;
        }
        return speed
      })
    }
  }, [snake, food])

  return (
    <>
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
        {isRunning && food !== undefined && (
          <div
            className='food'
            style={{
              gridColumn: food.x,
              gridRow: food.y,
            }}
          />
        )}
      </div>

      {/* absolute over board */}
      {!isRunning && <Logo />}
    </>
  )
}

export default Board
