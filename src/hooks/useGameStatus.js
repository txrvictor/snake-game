import { useContext } from "react"
import { GameStatus } from "../contexts/gameStatus"

export default function useGameStatus() {
  const context = useContext(GameStatus)
  if (context === undefined) {
    throw new Error('useGameStatus must be used within GameStatus')
  }

  return context
}
