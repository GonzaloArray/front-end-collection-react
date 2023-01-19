import { WINNER_COMBOS } from '../Data/Constans'

// Check winner
export const checkWinner = (boardCheck) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo

    if (
      boardCheck[a] &&
            boardCheck[a] === boardCheck[b] &&
            boardCheck[a] === boardCheck[c]

    ) {
      return boardCheck[a]
    }
  }
  return null
}

// Check end game
export const checkEndGame = (newBoard) => {
  return newBoard.every((square) => square !== null)
}
