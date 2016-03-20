import { combineReducers } from 'redux'
import bets from './bets'
import activeBets from './activeBets'

export default combineReducers({ bets, activeBets })
