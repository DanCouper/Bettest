import React from 'react'

export default function Options({ oddsFormat, onViewAsFractionalClick, onViewAsDecimalClick }) {
  return(
    <nav className="btn__nav-group">
      <button className="btn">View Bet history</button>
      {
        oddsFormat === 'FRACTIONAL' ? (<button onClick={ () => onViewAsDecimalClick() } className="btn">Show decimal odds</button>)
                                    : (<button onClick={ () => onViewAsFractionalClick() } className="btn">Show fractional odds</button>)
      }
    </nav>
  )
}
