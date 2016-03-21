import React from 'react'
import SlipBet from './SlipBet'

export default function Slip({ slipBets, onUnsetSlipBetClick, onClearSlipBetsClick, onSetStakeClick }) {
  return (
    <section className="betting-app__main-section betting-app__slip">
      <ul className="bets">
      { slipBets.size === 0 ? (<li>No bets on your slip.</li>)
                            : slipBets.keySeq().map(betID => (
        <SlipBet
          key={ betID }
          slipBet={ slipBets.get(betID) }
          onUnsetSlipBetClick={ () => onUnsetSlipBetClick(betID) }
          onSetStakeClick={ onSetStakeClick }
        />
      ))}
      </ul>
      { do { if( slipBets.size > 0) {(
        <div className="btn__group bet__controls">
          <button className="btn bet__control" onClick={ onClearSlipBetsClick }>Clear all bets on slip</button>
          <button className="btn btn--request bet__control">Submit these bets</button>
        </div>
      )}}}
    </section>
  )
}
