import Immutable from 'immutable'
import { SET_ACTIVE_BET, UNSET_ACTIVE_BET, CLEAR_ACTIVE_BETS } from '../constants/actionTypes'

export default function activeBets(state = [], action) {
  switch(action.type) {
    case SET_ACTIVE_BET:
      return [...state, action.id]
    case UNSET_ACTIVE_BET:
      return state.filter(id => id !== action.id)
    case CLEAR_ACTIVE_BETS:
      return []
    default:
      return state
  }
}
