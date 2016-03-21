import { VIEW_AS_DECIMAL, VIEW_AS_FRACTIONAL } from '../constants/actionTypes'
import { viewAsFractional, viewAsDecimal } from '../actions/oddsFormat'

export default function oddsFormat(state = 'FRACTIONAL', action) {
  switch(action.type) {
    case VIEW_AS_DECIMAL:
      return 'DECIMAL'
    case VIEW_AS_FRACTIONAL:
      return 'FRACTIONAL'
    default:
      return state
  }
}
