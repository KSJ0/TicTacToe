import React from 'react'
import Square from './Square'
import Strike from './Strike'

const Board = ({ squares, onSquareClick, playerTurn, strikeClass }) => {
  return (
    <div className='board'>
      <Square
        playerTurn={playerTurn} onClick={()=> onSquareClick(0)} value={squares[0]} className='right-border bottom-border' 
       />
      <Square
        playerTurn={playerTurn} onClick={()=> onSquareClick(1)} value={squares[1]} className='right-border bottom-border' 
      />
      <Square
        playerTurn={playerTurn} onClick={()=> onSquareClick(2)} value={squares[2]} className='bottom-border' 
      />
      <Square
        playerTurn={playerTurn} onClick={()=> onSquareClick(3)} value={squares[3]} className='right-border bottom-border' 
      />
      <Square
        playerTurn={playerTurn} onClick={()=> onSquareClick(4)} value={squares[4]} className='right-border bottom-border' 
      />
      <Square
        playerTurn={playerTurn} onClick={()=> onSquareClick(5)} value={squares[5]} className='bottom-border' 
      />
      <Square
        playerTurn={playerTurn} onClick={()=> onSquareClick(6)} value={squares[6]} className='right-border' 
      />
      <Square
        playerTurn={playerTurn} onClick={()=> onSquareClick(7)} value={squares[7]} className='right-border' 
      />
      <Square
        playerTurn={playerTurn} onClick={()=> onSquareClick(8)} value={squares[8]} 
      />
      <Strike strikeClass={strikeClass} />
    </div>
  )
}

export default Board
