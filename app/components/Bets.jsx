import React from 'react'
import Bet from './Bet'

export default function Bets({ bets, onLoadBetsClick, onSetSlipBetClick }) {
  return (
    <section className="betting-app__main-section betting-app__bets">
      <ul className="bets">
        { bets.keySeq().map(betID => (
          <Bet
            key={ betID }
            bet={ bets.get(betID) }
            onSetSlipBetClick={ () => onSetSlipBetClick(betID, bets.get(betID)) }
          />
        ))}
      </ul>
      <div className="btn__group bet__controls">
         <button className="btn bet__control" onClick={ onLoadBetsClick }>Load Bets</button>
      </div>
    </section>
  )
}
