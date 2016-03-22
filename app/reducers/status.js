import Immutable from 'immutable'
import { FETCH_BETS_REQUEST, FETCH_BETS_SUCCESS, FETCH_BETS_ERROR, POST_BET_REQUEST, POST_BET_ERROR, POST_BET_SUCCESS } from '../constants/actionTypes'

const initialState = Immutable.Map([
  ['loading', false],
  ['loaded', false],
  ['loadError', false],
  ['posted', false],
  ['postError', false]
])

export default function status(state = initialState, action) {
  switch(action.type) {
    case FETCH_BETS_REQUEST:
      return state.set('loading', true)
    case FETCH_BETS_SUCCESS:
      return state.set('loading', false).set('loaded', true)
    case FETCH_BETS_ERROR:
      return state.set('loading', false).set('loadError', true)
    case POST_BET_REQUEST:
      return state.set('posted', false).set('postError', false)
    case POST_BET_SUCCESS:
      return state.set('posted', true)
    case POST_BET_ERROR:
      return state.set('postError', true)
    default:
      return state
  }
}
