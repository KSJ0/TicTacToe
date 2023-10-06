import React from 'react'

const Square = ({className, value, onClick, playerTurn }) => {
  let hoverClass = null;
  if(value == null && playerTurn != null){
    hoverClass = `${playerTurn.toLowerCase()}-hover`;
  }
  return (
    <div onClick={onClick} className={`square ${className} ${hoverClass}`}>
      {value}
    </div>
  )
}

export default Square
