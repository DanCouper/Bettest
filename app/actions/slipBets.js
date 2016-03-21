import { SET_SLIP_BET, UNSET_SLIP_BET, CLEAR_SLIP_BETS, SET_STAKE } from '../constants/actionTypes'

export function setSlipBet(id, value) {
  return {
    type: SET_SLIP_BET,
    id,
    value
  }
}

export function unsetSlipBet(id) {
  return {
    type: UNSET_SLIP_BET,
    id
  }
}

export function clearSlipBets() {
  return {
    type: CLEAR_SLIP_BETS
  }
}

export function setStake(id, value) {
  return {
    type: SET_STAKE,
    id,
    value
  }
}
