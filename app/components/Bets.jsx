import React from 'react'
import Bet from './Bet'

export default function Bets({ bets }) {
  return (
    <ul>
    { bets.map(bet => (
      <Bet
        key={ bet["bet_id"] }
        bet={ bet }
      />
    ))}
    </ul>
  )
}
