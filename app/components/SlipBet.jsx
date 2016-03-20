import React from 'react'

export default function SlipBet({ slipbet, onUnsetActiveBetClick }) {
  return (
    <li className="bet">
      <p className="bet__text">
        <span className="bet__name">{ slipbet["name"] }</span> to win the <span className="bet__event">{ slipbet["event"] }</span>
      </p>
      <p className="bet__odds">{ `${slipbet["odds"]["numerator"]}-${slipbet["odds"]["denominator"]}` }</p>
      <button onClick={ onUnsetActiveBetClick }>Remove bet from slip</button>
    </li>
  )
}
