import { FETCH_BETS_REQUEST, FETCH_BETS_SUCCESS, FETCH_BETS_ERROR } from '../constants/actionTypes'
import { fetchBets } from '../actions/fetchBets'

export default function bets(state = [], action) {
  switch(action.type) {
    case FETCH_BETS_REQUEST:
      return state
    case FETCH_BETS_SUCCESS:
      return action.bets
    case FETCH_BETS_ERROR:
      return state
    default:
      return state
  }
}
