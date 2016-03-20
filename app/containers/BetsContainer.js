import React from 'react'
import { connect } from 'react-redux'
import Bets from '../components/Bets'
import { fetchBets } from '../actions/fetchBets'
import { setActiveBet } from '../actions/activeBets'

const mapStateToProps = (state) => {
  return {
    bets: state.bets.filter(bet => !state.activeBets.includes(bet["bet_id"]))
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadBetsClick: () => dispatch(fetchBets()),
    onSetActiveBetClick: (id) => dispatch(setActiveBet(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bets)
