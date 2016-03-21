import { combineReducers } from 'redux'
import bets from './bets'
import slipBets from './slipBets'
import oddsFormat from './oddsFormat'
import postedBets from './postedBets'
import status from './status'

export default combineReducers({ bets, slipBets, oddsFormat, postedBets, status })
