import React from 'react'
import SlipBet from './SlipBet'

export default function Slip({ slipbets, onUnsetActiveBetClick, onClearActiveBetsClick }) {
  if(Object.keys(slipbets).length === 0) {
    return (
      <div>
        <p>No bets on your slip.</p>
      </div>
    )
  } else {
    return (
      <div>
        <ul>
        { slipbets.map(slipbet => (
          <SlipBet
            key={ slipbet["bet_id"] }
            slipbet={ slipbet }
            onUnsetActiveBetClick={ () => onUnsetActiveBetClick(slipbet["bet_id"]) }
          />
        ))}
        </ul>
        <div>
          <button onClick={ onClearActiveBetsClick }>Clear all bets on slip</button>
        </div>
      </div>
    )
  }
}
