import React from 'react'

export default function Bet({ bet, onSetActiveBetClick }) {
  return (
    <li className="bet" onClick={ onSetActiveBetClick } >
      <p className="bet__text">
        <span className="bet__name">{ bet["name"] }</span> to win the <span className="bet__event">{ bet["event"] }</span>
      </p>
      <p className="bet__odds">{ `${bet["odds"]["numerator"]}-${bet["odds"]["denominator"]}` }</p>
    </li>
  )
}
