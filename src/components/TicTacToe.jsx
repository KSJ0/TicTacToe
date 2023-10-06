import { useState, useEffect } from 'react';
import React from 'react';
import Board from './Board';
import GameOver from './GameOver';
import GameState from './GameState';
import Reset from './Reset';

// setting player variables.
const PLAYER_X = 'X';
const PLAYER_O = 'O';

// setting an array of combination to show the win strike.
const winningCombinations = [
  // Rows
  { combo: [0, 1, 2], strikeClass: "strike-row-1"},
  { combo: [3, 4, 5], strikeClass: "strike-row-2"},
  { combo: [6, 7, 8], strikeClass: "strike-row-3"},

  // Columns
  { combo: [0, 3, 6], strikeClass: "strike-column-1"},
  { combo: [1, 4, 7], strikeClass: "strike-column-2"},
  { combo: [2, 5, 8], strikeClass: "strike-column-3"},

  // Diagonals
  { combo: [0, 4, 8], strikeClass: "strike-diagonal-1"},
  { combo: [2, 4, 6], strikeClass: "strike-diagonal-2"},
];

// function to check which player wins using the combo above to identify
function checkWinner( squares, setStrikeClass, setGameState ) {
  for (const { combo, strikeClass } of winningCombinations) {
    const squareValue1 = squares[combo[0]];
    const squareValue2 = squares[combo[1]];
    const squareValue3 = squares[combo[2]];

    if(squareValue1 !== null && squareValue1 === squareValue2 && squareValue1 === squareValue3){
      setStrikeClass(strikeClass);
      if (squareValue1 === PLAYER_X) {
        setGameState(GameState.playerXWins);
      } else {
        setGameState(GameState.playerOWins)
      }
      return;
    } 
  }

  // When all squares are filled in without someone winning then results to draw
  const areAllSquaresFilledIn = squares.every((square) => square !== null);
  if(areAllSquaresFilledIn){
    setGameState(GameState.draw);
  }
} 


const TicTacToe = () => {
  // useState implementing
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
  const [strikeClass, setStrikeClass] = useState();
  const [gameState, setGameState] = useState(GameState.inProgress);

  
  const handleSquareClick = (index) => {
    if(gameState !== GameState.inProgress) {
      return;
    }

    if(squares[index] !== null) {
      return;
    }

    const newSquares = [...squares];
    newSquares[index] = playerTurn;
    setSquares(newSquares);
    if(playerTurn === PLAYER_X) {
      setPlayerTurn(PLAYER_O);
    } else {
      setPlayerTurn(PLAYER_X);
    }
  }

  // Reset game 
  const handleReset = () => {
    setGameState(GameState.inProgress) 
    setSquares(Array(9).fill(null));
    setPlayerTurn(PLAYER_X);
    setStrikeClass(null);
  }

  useEffect(() => {
    checkWinner(squares, setStrikeClass, setGameState);
  }, [squares]);

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Board playerTurn={playerTurn} squares={squares} onSquareClick={handleSquareClick} strikeClass={strikeClass} />
      <GameOver gameState={gameState} />
      <Reset gameState={gameState} onReset={handleReset} />
    </div>
  );
}

export default TicTacToe;