import Immutable from 'immutable'
import { FETCH_BETS_REQUEST, FETCH_BETS_SUCCESS, FETCH_BETS_ERROR } from '../constants/actionTypes'

export default function status(state = Immutable.Map([['loading', false],['loaded', false],['loadError', false]]), action) {
  switch(action.type) {
    case FETCH_BETS_REQUEST:
      return state.set('loading', true)
    case FETCH_BETS_SUCCESS:
      return state.set('loading', false).set('loaded', true)
    case FETCH_BETS_ERROR:
      return state.set('loading', false).set('loadError', true)
    default:
      return state
  }
}
