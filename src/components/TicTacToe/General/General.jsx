import confetti from 'canvas-confetti'
import React, { useState } from 'react'
import styled from 'styled-components'
import { TURNS } from '../../../Data/Constans'
import { checkEndGame, checkWinner } from '../../../logic/BoardTicToc'
import { resetSave, saveGame } from '../../../logic/storage'
import { Square } from '../Square/Square'
import { WinnerModal } from '../Square/WinnerModal'

import './General.css'

// Styled Components
const Title = styled.h2`
    font-weight: bold;
    font-size: 3rem;
    text-shadow: 0px 1px 2rem red;
`

export const General = () => {
  // Use State
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  }
  )
  // Turn Player
  const [turn, setTurn] = useState(() => {
    const turnFormStorage = window.localStorage.getItem('turn')
    return turnFormStorage ?? TURNS.X
  }
  )
  // Winner
  const [winner, setWinner] = useState(null)

  // Function
  const updateBoard = (index) => {
    if (board[index] || winner) return

    // Board
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // Player
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // Save Game
    saveGame({
      board: newBoard,
      turn: newTurn
    })

    const newWinner = checkWinner(newBoard)

    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  const handleReset = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    // Remove localStorage
    resetSave()
  }

  return (
    <section className='container ttt-flex'>

      <Title>Tic Tac Toe</Title>
      <button onClick={handleReset}>Empezar de nuevo</button>
      <section className='game'>
        {
                    board.map((_, i) => (
                      <Square
                        key={i}
                        index={i}
                        updateBoard={updateBoard}
                      >
                        {board[i]}
                      </Square>

                    ))
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}> {TURNS.X} </Square>
        <Square isSelected={turn === TURNS.O}> {TURNS.O} </Square>
      </section>

      <WinnerModal winner={winner} handleReset={handleReset} />
    </section>
  )
}
