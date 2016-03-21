import React from 'react'
import Bet from './Bet'

export default function Bets({ bets, status, oddsFormat, onLoadBetsClick, onSetSlipBetClick }) {
  const betDisplay = do {
    if(status.get('loading')) {
      (<li>Bets loading...</li>)
    } else if(status.get('loadError')) {
      (<li>There was an error loading the bets, please refresh and try again.</li>)
    } else {
      bets.keySeq().map(betID => (
        <Bet
          key={ betID }
          bet={ bets.get(betID) }
          oddsFormat={ oddsFormat }
          onSetSlipBetClick={ () => onSetSlipBetClick(betID, bets.get(betID)) }
        />
      ))
    }
  }

  return (
    <section className="betting-app__main-section betting-app__bets">
      <ul className="bets">
        { betDisplay }
      </ul>
      { do { if(!status.get('loaded')) {(
        <div className="btn__group bet__controls">
           <button className="btn bet__control" onClick={ onLoadBetsClick }>Load Bets</button>
        </div>
      )}}}
    </section>
  )
}
