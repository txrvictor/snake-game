import SnakeLogo from '../assets/snake-logo-ai-generated.png'
import './logo.scss'

function Logo() {
  return (
    <div className='logo-container'>
      <img className='logo-img' src={SnakeLogo} alt='Snake Game logo' />
      <h1 className='logo-text'>Press SPACE to start</h1>
    </div>
  )
}

export default Logo
