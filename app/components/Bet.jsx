import React from 'react'

export default function Bet({ bet }) {
  return (
    <li>{ `Bet on ${bet["name"]} winning the ${bet["event"]} at odds of ${bet["odds"]["numerator"]}-${bet["odds"]["denominator"]}` }</li>
  )
}
