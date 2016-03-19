import React from 'react'
import { connect } from 'react-redux'
import Bets from '../components/Bets'

const state = {
  bets: [
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
}

const mapStateToProps = (state) => {
  return {
    bets: state.bets,
  }
}

export default connect(mapStateToProps, null)(Bets)
