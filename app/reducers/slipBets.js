import Immutable from 'immutable'
import { SET_SLIP_BET, UNSET_SLIP_BET, CLEAR_SLIP_BETS, SET_STAKE, POST_BETS_SUCCESS } from '../constants/actionTypes'
import { payoutCalculator } from '../helpers'

function addSlipProps(betMap) {
  return betMap.set('stake', 0).set('payout', 0)
}

export default function slipBets(state = Immutable.Map(), action) {
  switch(action.type) {
    case SET_SLIP_BET:
      return state.set(action.id, addSlipProps(action.value))
    case UNSET_SLIP_BET:
      return state.delete(action.id)
    case CLEAR_SLIP_BETS:
      return state.clear()
    case POST_BETS_SUCCESS:
      return state.delete(action.id)
    case SET_STAKE:
      const num = state.getIn([action.id, 'odds', 'numerator'])
      const den = state.getIn([action.id, 'odds', 'denominator'])
      return state.setIn([action.id, 'stake'], action.value)
                  .setIn([action.id, 'payout'], payoutCalculator(action.value, num, den))
    default:
      return state
  }
}
