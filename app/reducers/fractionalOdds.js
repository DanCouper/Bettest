import { VIEW_AS_DECIMAL, VIEW_AS_FRACTIONAL } from '../constants/actionTypes'
import { viewAsFractional, viewAsDecimal } from '../actions/oddsFormat'

export default function fractionalOdds(state = true, action) {
  switch(action.type) {
    case VIEW_AS_DECIMAL:
      return false
    case VIEW_AS_FRACTIONAL:
      return true
    default:
      return true
  }
}
