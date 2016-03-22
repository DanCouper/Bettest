import { POST_BET_REQUEST, POST_BET_ERROR, POST_BET_SUCCESS, POST_BET_REQUEST_COMPLETE } from '../constants/actionTypes'
import { checkStatus, parseJSON } from '../helpers'
import { unsetSlipBet } from './slipBets'
import 'whatwg-fetch'

function postBetRequest(id) {
  return {
    type: POST_BET_REQUEST,
    id
  }
}

/**
 * The bets are held in the app state in the form of a Map.
 * Convert to an array of objects, which can then be parsed to JSON for POSTing.
 */
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

export function postBets(bets, url = 'https://bedefetechtest.herokuapp.com/v1/bets') {
  return (dispatch) => {
    const betsArr = preparePostData(bets)

    for (let bet of betsArr) {
      let id = bet['bet_id']
      dispatch(postBetRequest(id))
      return fetch(url, { method: 'post', headers: { 'Content-type': 'application/json' }, body: JSON.stringify(bet) })
            .then(checkStatus)
            .then(response => {
              // dispatch(postBetSuccess(id, response))
              // NOTE: not body for success/error, just faking the response
              const fakeResponse = { ...bet, transaction_id: `${Math.floor(Math.random() * (9999 - 1000)) + 1000}` }
              console.log(fakeResponse)
              dispatch(postBetSuccess(id, fakeResponse))
              dispatch(unsetSlipBet(id))
            })
            .catch(error => dispatch(postBetError(id, error)))
    }
  }
}

export function postBetError(id, message = 'Sorry, there was an error posting.') {
  return {
    type: POST_BET_ERROR,
    id,
    message
  }
}

export function postBetSuccess(id, parsedResponse) {
  return {
    type: POST_BET_SUCCESS,
    id,
    parsedResponse
  }
}
