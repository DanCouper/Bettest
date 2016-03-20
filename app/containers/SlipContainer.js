import React from 'react'
import { connect } from 'react-redux'
import Slip from '../components/Slip'
import { unsetActiveBet, clearActiveBets } from '../actions/activeBets'

const mapStateToProps = (state) => {
  return {
    slipbets: state.bets.filter(bet => state.activeBets.includes(bet["bet_id"]))
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClearActiveBetsClick: () => dispatch(clearActiveBets()),
    onUnsetActiveBetClick: (id) => dispatch(unsetActiveBet(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Slip)
