import { AnimatePresence, motion } from 'framer-motion'
import styled from 'styled-components'
import { Square } from '../Square/Square'

const SectionBoard = styled(motion.section)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`

export const Board = ({ board, updateBoard }) => {
  console.log('me renderizo debuelta')

  return (

    <SectionBoard
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
        duration: 2,
        delay: 2
      }}
    >
      <AnimatePresence>

        {
        board.map((_, i) => (
          <Square
            key={i}
            index={i}
            updateBoard={updateBoard}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            {board[i]}
          </Square>

        ))
      }
      </AnimatePresence>
    </SectionBoard>

  )
}
