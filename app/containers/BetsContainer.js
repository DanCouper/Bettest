import React from 'react'
import { connect } from 'react-redux'
import Bets from '../components/Bets'
import { fetchBets } from '../actions/fetchBets'
import { setSlipBet } from '../actions/slipBets'

const mapStateToProps = (state) => {
  return {
    bets: state.bets.filterNot((bet, betID) => state.slipBets.keySeq().includes(betID)),
    oddsFormat: state.oddsFormat,
    status: state.status
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadBetsClick: () => dispatch(fetchBets()),
    onSetSlipBetClick: (id, value) => dispatch(setSlipBet(id, value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bets)
