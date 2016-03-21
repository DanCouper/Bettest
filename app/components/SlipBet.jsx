import React, { Component } from 'react'
import { payoutCalculator, oddsFormatter } from '../helpers'

export default class SlipBet extends Component {
  state = {
    stake: this.props.slipBet.get('stake'),
    payout: 0
  }

  handleStakeChange = (e) => this.setState({
    stake: e.target.value,
    payout: payoutCalculator(e.target.value, this.props.slipBet.getIn(['odds', 'numerator']), this.props.slipBet.getIn(['odds', 'denominator']))
  })

  render() {
    // I'm doing zero validation, just shoving a class on to indicate bets are submittable.
    // Nothing will go wrong if the bets are submitted with a stake of 0, so v0v
    // NOTE: it checks **props** NOT **component state**, props must be nonzero to bet.
    const submittableClass = this.props.slipBet.get('stake') > 0 ? 'bet--submittable' : 'bet--unsubmittable'
    const odds = oddsFormatter(this.props.oddsFormat, this.props.slipBet.getIn(['odds', 'numerator']), this.props.slipBet.getIn(['odds', 'denominator']))

    return (
      <li className={ `bet bet--onslip ${submittableClass}` }>
        <div className="bet__text">
          <p className="bet__reminder"><strong className="bet__name">{ this.props.slipBet.get('name') }</strong> to win the <strong className="bet__event">{ this.props.slipBet.get('event') }</strong> at <strong className="bet__odds">{ odds }</strong></p>
          <p className="bet__stake">A bet of <strong>£<input className="text-input bet__stake__input" onBlur={ () => this.props.onSetStakeClick(this.props.slipBet.get('bet_id'), this.state.stake) } onChange={ this.handleStakeChange } value={ this.state.stake } /></strong> nets you <strong className="bet__payout">£{ this.state.payout }</strong></p>
        </div>
        <div className="btn__group bet__controls">
          <button className="btn bet__control" onClick={ this.props.onUnsetSlipBetClick }>Remove bet from slip</button>
          <button className="btn btn--request bet__control" onClick={ () => this.props.onSetStakeClick(this.props.slipBet.get('bet_id'), this.state.stake) } >Set stake</button>
        </div>
      </li>
    )
  }
}
