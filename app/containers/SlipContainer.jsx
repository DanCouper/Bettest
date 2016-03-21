import React from 'react'
import { connect } from 'react-redux'
import Slip from '../components/Slip'
import { unsetSlipBet, clearSlipBets, setStake } from '../actions/slipBets'

const mapStateToProps = (state) => {
  return {
    slipBets: state.slipBets
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClearSlipBetsClick: () => dispatch(clearSlipBets()),
    onUnsetSlipBetClick: (id) => dispatch(unsetSlipBet(id)),
    onSetStakeClick: (id, value) => dispatch(setStake(id, value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Slip)
