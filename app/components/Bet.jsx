import React from 'react'

export default function Bet({ bet, onSetSlipBetClick }) {
  return (
    <li className="bet bet--available" onClick={ onSetSlipBetClick }>
      <p className="bet__text">
        <strong className="bet__name">{ bet.get('name') }</strong> to win the <strong className="bet__event">{ bet.get('event') }</strong> at <strong className="bet__odds">{ `${bet.getIn(['odds', 'numerator'])}-${bet.getIn(['odds', 'denominator'])}` }</strong>
      </p>
    </li>
  )
}
