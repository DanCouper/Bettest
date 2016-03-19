import Immutable from 'immutable'
import { FETCH_BETS_REQUEST, FETCH_BETS_SUCCESS, FETCH_BETS_ERROR } from '../constants/ACTIONS'

const initialState = [
  {
    "bet_id": 1,
    "event": "Next World Cup",
    "name": "England",
    "odds": {
      "numerator": 10,
      "denominator": 1
    }
  },
  {
    "bet_id": 2,
    "event": "Next World Cup",
    "name": "Brazil",
    "odds": {
      "numerator": 2,
      "denominator": 1
    }
  },
  {
    "bet_id": 3,
    "event": "Next World Cup",
    "name": "Spain",
    "odds": {
      "numerator": 3,
      "denominator": 1
    }
  },
  {
    "bet_id": 4,
    "event": "Next World Cup",
    "name": "Germany",
    "odds": {
      "numerator": 1,
      "denominator": 1
    }
  },
  {
    "bet_id": 5,
    "event": "Ryder Cup",
    "name": "Europe",
    "odds": {
      "numerator": 7,
      "denominator": 4
    }
  },
  {
    "bet_id": 6,
    "event": "Ryder Cup",
    "name": "USA",
    "odds": {
      "numerator": 9,
      "denominator": 2
    }
  }
]

export default function bets(state = initialState, action) {
  return state
}
