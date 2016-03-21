import React from 'react'
import { connect } from 'react-redux'
import { viewAsFractional, viewAsDecimal } from '../actions/oddsFormat'
import Options from '../components/Options'

const mapStateToProps = (state) => {
  return {
    oddsFormat: state.oddsFormat,
    postedBets: state.postedBets
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onViewAsFractionalClick: () => dispatch(viewAsFractional()),
    onViewAsDecimalClick: () => dispatch(viewAsDecimal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Options)
