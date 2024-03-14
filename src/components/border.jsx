import PropTypes from 'prop-types'
import './border.scss'

Border.propTypes = {
  children: PropTypes.node.isRequired
}

function Border({children}) {
  return (
    <div className='multi-layer-border'>
      <div>
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Border
