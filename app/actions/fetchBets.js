import { FETCH_BETS_REQUEST, FETCH_BETS_ERROR, FETCH_BETS_SUCCESS } from '../constants/actionTypes'
import { checkStatus, parseJSON } from '../helpers'
import 'whatwg-fetch'

function fetchBetsRequest() {
  return {
    type: FETCH_BETS_REQUEST
  }
}

export function fetchBets(url = 'https://bedefetechtest.herokuapp.com/v1/markets') {
  return (dispatch) => {
    dispatch(fetchBetsRequest)
    // return fetch(url)
    //       .then(checkStatus)
    //       .then(parseJSON)
    // In development (or an environment with a no internet),
    // comment out above three lines, and uncomment these two:
    return Promise.resolve(JSON.stringify([{"bet_id":1,"event":"Next World Cup","name":"England","odds":{"numerator":10,"denominator":1}},{"bet_id":2,"event":"Next World Cup","name":"Brazil","odds":{"numerator":2,"denominator":1}},{"bet_id":3,"event":"Next World Cup","name":"Spain","odds":{"numerator":3,"denominator":1}},{"bet_id":4,"event":"Next World Cup","name":"Germany","odds":{"numerator":1,"denominator":1}},{"bet_id":5,"event":"Ryder Cup","name":"Europe","odds":{"numerator":7,"denominator":4}},{"bet_id":6,"event":"Ryder Cup","name":"USA","odds":{"numerator":9,"denominator":2}}]))
          .then(response => JSON.parse(response))
          .then(response => dispatch(fetchBetsSuccess(response)))
          .catch(error => dispatch(fetchBetsError(error)))
  }
}

export function fetchBetsError(message = 'Sorry, there was an error loading.') {
  return {
    type: FETCH_BETS_ERROR,
    message
  }
}

export function fetchBetsSuccess(bets) {
  return {
    type: FETCH_BETS_SUCCESS,
    bets
  }
}
