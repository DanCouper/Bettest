import React from 'react'
import Bet from './Bet'

export default function Bets({ bets, onLoadBetsClick, onSetActiveBetClick }) {
  if(Object.keys(bets).length === 0) {
    return (
      <div>
        <p>No bets loaded.</p>
        <button onClick={ onLoadBetsClick }>Load Bets</button>
      </div>
    )
  } else {
    return (
      <ul>
      { bets.map(bet => (
        <Bet
          key={ bet["bet_id"] }
          bet={ bet }
          onSetActiveBetClick={ () => onSetActiveBetClick(bet["bet_id"]) }
        />
      ))}
      </ul>
    )
  }
}
