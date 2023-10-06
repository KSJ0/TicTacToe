import React from 'react'
import GameState from './GameState'

const GameOver = ({ gameState }) => {

  // using switch statement for having 4 options
  switch (gameState) {
    case GameState.inProgress:
      return<></>;
    case GameState.playerOWins:
      return <div className='game-over'>O Wins</div>;
    case GameState.playerXWins:
      return <div className='game-over'>X Wins</div>;
    case GameState.draw:
      return <div className='game-over'>Draw</div>
    default:
      return<></>;
  }
  return (
    <div>
      game over
    </div>
  )
}

export default GameOver
