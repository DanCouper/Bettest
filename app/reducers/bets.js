import Immutable from 'immutable'
import { FETCH_BETS_REQUEST, FETCH_BETS_SUCCESS, FETCH_BETS_ERROR } from '../constants/actionTypes'
import { fetchBets } from '../actions/fetchBets'

/**
 * Fetched from the API, bets are in the form of an array.
 * Assuming the JSON has already been parsed, reduce this
 * array to an immutable Map keyed by `bet_id`.
 */
function normaliseAndPetrify(bets) {
  const betsMap = new Map(bets.reduce((map, bet) => [...map, [bet.bet_id, bet]], []))
  return Immutable.fromJS(betsMap)
}

export default function bets(state = Immutable.Map(), action) {
  switch(action.type) {
    case FETCH_BETS_REQUEST:
      return state
    case FETCH_BETS_SUCCESS:
      return state.merge(normaliseAndPetrify(action.bets))
    case FETCH_BETS_ERROR:
      return state
    default:
      return state
  }
}
