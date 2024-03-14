import Border from './components/border'
import Board from './components/board'
import Logo from './components/logo'


function App() {

  return (
    <>
     <div>
      {/* TODO add score */}
      <Border>
        <Board />
      </Border>
     </div>

     <Logo />
    </>
  )
}

export default App
