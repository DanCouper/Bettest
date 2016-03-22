import Immutable from 'immutable'
import { POST_BET_REQUEST, POST_BET_ERROR, POST_BET_SUCCESS } from '../constants/actionTypes'

function preparePostData(slipBets) {
  return [...slipBets.keys()].map(betID => {
    return {
      'bet_id': slipBets.getIn([betID, 'bet_id']),
      'odds': {
        'numerator': slipBets.getIn([betID, 'odds', 'numerator']),
        'denominator': slipBets.getIn([betID, 'odds', 'denominator'])
      },
      'stake': slipBets.getIn([betID, 'stake'])
    }
  })
}

export default function postedBets(state = Immutable.Map(), action) {
  switch(action.type) {
    case POST_BET_REQUEST:
      return state
    case POST_BET_SUCCESS:
      const mapID = action.parsedResponse['transaction_id']
      return state.set(mapID, Immutable.Map(action.parsedResponse))
    case POST_BET_ERROR:
      return state
    default:
      return state
  }
}
