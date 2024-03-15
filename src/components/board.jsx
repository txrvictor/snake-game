import { useState } from 'react'
import './board.scss'

function Board() {
  const [snake, setSnake] = useState([{x: 10, y: 10}])
  

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

      {/* TODO food rendering */}
    </div>
  )
}

export default Board
