import { SET_ACTIVE_BET, UNSET_ACTIVE_BET, CLEAR_ACTIVE_BETS } from '../constants/actionTypes'

export function setActiveBet(id) {
  return {
    type: SET_ACTIVE_BET,
    id
  }
}

export function unsetActiveBet(id) {
  return {
    type: UNSET_ACTIVE_BET,
    id
  }
}

export function clearActiveBets() {
  return {
    type: CLEAR_ACTIVE_BETS
  }
}
