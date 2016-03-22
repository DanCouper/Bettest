import React from 'react'
import PostedBet from './PostedBet'

export default function PostedBets({ dropdownVisible, postedBets, oddsFormat }) {
  const visibleClass = dropdownVisible ? 'visible' : 'hidden'
  return (
    <section className={ `posted-bets__dropdown posted-bets__dropdown--${visibleClass}` }>
      <h1 className="posted-bets__header">Bet history (from most recent)</h1>
      <ul className="posted-bets">
        { do { if(postedBets.size === 0) (<li><strong>No recent bets</strong></li>) }}
        { postedBets.keySeq().map(id => (
          <PostedBet
            key={ id }
            postedBet={ postedBets.get(id) }
            oddsFormat={ oddsFormat }
          />
        ))}
      </ul>
    </section>
  )
}
