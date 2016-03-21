import { combineReducers } from 'redux'
import bets from './bets'
import slipBets from './slipBets'

export default combineReducers({ bets, slipBets })
