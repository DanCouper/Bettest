import React from 'react'
import { connect } from 'react-redux'
import Slip from '../components/Slip'
import { unsetSlipBet, clearSlipBets, setStake } from '../actions/slipBets'
import { postBets } from '../actions/postBets'

const mapStateToProps = (state) => {
  return {
    slipBets: state.slipBets,
    oddsFormat: state.oddsFormat
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClearSlipBetsClick: () => dispatch(clearSlipBets()),
    onUnsetSlipBetClick: (id) => dispatch(unsetSlipBet(id)),
    onSetStakeClick: (id, value) => dispatch(setStake(id, value)),
    onPostBetsClick: (slipBets) => dispatch(postBets(slipBets))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Slip)
