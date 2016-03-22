import React from 'react'
import SlipBet from './SlipBet'
import Flash from './Flash'

export default function Slip({ slipBets, status, oddsFormat, onUnsetSlipBetClick, onClearSlipBetsClick, onSetStakeClick, onPostBetsClick }) {
  const indicateSubmit = do { if(slipBets.size > 0) 'pulse' }
  return (
    <section className="betting-app__main-section betting-app__slip">
      <ul className="bets">
      <Flash status={ status } />
      { slipBets.size === 0 ? (<li className="notabet"><p>No bets on your slip.</p></li>)
                            : slipBets.keySeq().map(betID => (
        <SlipBet
          key={ betID }
          slipBet={ slipBets.get(betID) }
          oddsFormat={ oddsFormat }
          onUnsetSlipBetClick={ () => onUnsetSlipBetClick(betID) }
          onSetStakeClick={ onSetStakeClick }
        />
      ))}
      </ul>
      { do { if( slipBets.size > 0) {(
        <div className="btn__group bet__controls">
          <button className="btn bet__control" onClick={ onClearSlipBetsClick }>Clear all bets on slip</button>
          <button className={ `btn btn--request bet__control ${indicateSubmit}` }  onClick={ () => onPostBetsClick(slipBets) }>Submit these bets</button>
        </div>
      )}}}
    </section>
  )
}
