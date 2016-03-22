import React from 'react'
import { oddsFormatter, payoutCalculator } from '../helpers'
/**
 * FIXME: this isn't working. `state.postedBets` looks fine, new bets are being
 * created without any issue. `postedBet.get('transaction_id')` works perfectly.
 * All the rest return undefined values; the values are there, I can see them if I inspect
 * the state, but they aren't rendering out.
 */
export default function PostedBet({ oddsFormat, postedBet }) {
  return (
    <li className="posted-bet">
      <p>Transaction ID <strong>{ postedBet.get('transaction_id') }</strong></p>
      <p>{ postedBet.get('event') } to win { postedBet.get('name') }</p>
      <p>Odds: <strong>{ oddsFormatter(oddsFormat, postedBet.getIn(['odds', 'numerator']), postedBet.getIn(['odds', 'denominator'])) }</strong></p>
      <p>Expected return: <strong>£{ payoutCalculator(postedBet.get('stake'), postedBet.getIn(['odds', 'numerator']), postedBet.getIn(['odds', 'denominator'])) }</strong></p>
    </li>
  )
}
