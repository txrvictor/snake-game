import { useCallback, useEffect, useRef, useState } from 'react'
import useScores from '../hooks/useScores'
import useControls from '../hooks/useControls'
import Logo from './logo'

import './board.scss'

const GRID_SIZE = 20

function Board() {
  const [isRunning, setIsRunning] = useState(false)
  const [runningDelay, setRunningDelay] = useState(200)

  const [snake, setSnake] = useState([{x: 10, y: 10}])
  const [food, setFood] = useState()

  const {score, setScore, setHighestScore} = useScores()
  const direction = useControls()

  const generateRandomFood = useCallback(() => {
    setFood({
      x: Math.floor(Math.random() * GRID_SIZE) + 1,
      y: Math.floor(Math.random() * GRID_SIZE) + 1,
    })
  }, [])

  const runningInterval = useRef()

  const move = useRef()
  move.current = () => {
    const snakeCopy = [...snake]
    const head = {...snakeCopy[0]}
    switch (direction) {
      case 'up':
        head.y--
        break
      case 'down':
        head.y++
        break
      case 'left':
        head.x--
        break
      case 'right':
        head.x++
        break
    }
  
    // set new head in front of the snake
    snakeCopy.unshift(head)

    if (head.x === food?.x && head.y === food?.y) {
      generateRandomFood()

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
    } else {
      // snake didn't eat so remove tail after we moved the head forward
      snakeCopy.pop()
    }

    setSnake(snakeCopy)
  }

  useEffect(() => {
    const handleKeyPress = (event) => {
      const {key, code} = event
      if (code === 'Space' || key === ' ') {
        setIsRunning(true)
      }
    }      
    document.addEventListener('keydown', handleKeyPress)

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  useEffect(() => {
    if (isRunning) {
      generateRandomFood()
    }
  }, [isRunning])

  useEffect(() => {
    clearInterval(runningInterval.current)

    if (isRunning) {
      runningInterval.current = setInterval(() => {
        move?.current && move.current()
        // checkCollision()
      }, runningDelay)
    }

    // clean up on unmount
    return () => {
      clearInterval(runningInterval.current)
    }
  }, [isRunning, runningDelay])

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
