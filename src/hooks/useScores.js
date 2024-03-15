import { useContext } from "react"
import { ScoreContext } from "../contexts/score"

export default function useScores() {
  const context = useContext(ScoreContext)
  if (context === undefined) {
    throw new Error('useScores must be used within ScoreContext')
  }

  return context
}
