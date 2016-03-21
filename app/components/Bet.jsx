import React from 'react'
import { oddsFormatter } from '../helpers'

export default function Bet({ bet, oddsFormat, onSetSlipBetClick }) {
  const odds = oddsFormatter(oddsFormat, bet.getIn(['odds', 'numerator']), bet.getIn(['odds', 'denominator']))
  return (
    <li className="bet bet--available" onClick={ onSetSlipBetClick }>
      <p className="bet__text">
        <strong className="bet__name">{ bet.get('name') }</strong> to win the <strong className="bet__event">{ bet.get('event') }</strong> at <strong className="bet__odds">{ odds }</strong>
      </p>
    </li>
  )
}
