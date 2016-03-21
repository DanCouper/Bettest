import { POST_BETS_REQUEST, POST_BETS_ERROR, POST_BETS_SUCCESS } from '../constants/actionTypes'
import { checkStatus, parseJSON } from '../helpers'
import 'whatwg-fetch'

function postBetsRequest() {
  return {
    type: POST_BETS_REQUEST
  }
}

export function postBets(bets, url = 'https://bedefetechtest.herokuapp.com/v1/bets') {
  return (dispatch) => {
    dispatch(postBetsRequest)
    for (let data of dataArray) {
      return fetch(url, { method: 'post', body: JSON.stringify(bet) })
            .then(checkStatus)
            .then(response => dispatch(postBetsSuccess(JSON.parse(response))))
            .catch(error => dispatch(postBetsError(error)))
    }
  }
}

export function postBetsError(message = 'Sorry, there was an error posting.') {
  return {
    type: POST_BETS_ERROR,
    message
  }
}

export function postBetsSuccess(parsedResponse) {
  return {
    type: POST_BETS_SUCCESS,
    parsedResponse
  }
}
