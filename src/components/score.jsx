import PropTypes from 'prop-types'
import { padScore } from '../utils/score'
import './score.scss'

Score.propTypes = {
  score: PropTypes.number,
  highestScore: PropTypes.number
}

Score.defaultProps = {
  score: 0,
  highestScore: 0
}

function Score({score, highestScore}) {
  return (
    <div className='score-container'>
      <h1 className='highest-score'>{padScore(highestScore)}</h1>
      <h1 className='score'>{padScore(score)}</h1>
    </div>
  )
}

export default Score
