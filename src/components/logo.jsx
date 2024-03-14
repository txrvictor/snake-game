import SnakeLogo from '../assets/snake-logo-ai-generated.png'
import './logo.scss'

function Logo() {
  return (
    <>
      <img className='logo-img' src={SnakeLogo} alt='Snake Game logo' />
      <h1 className='logo-text'>Press SPACE to start</h1>
    </>
  )
}

export default Logo
