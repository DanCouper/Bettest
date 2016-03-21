import React, { Component } from 'react'
import { payoutCalculator } from '../helpers'

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
    const [name, event, num, denom] = [this.props.slipBet.get('name'), this.props.slipBet.get('event'), this.props.slipBet.getIn(['odds', 'numerator']), this.props.slipBet.getIn(['odds', 'denominator'])]
    return (
      <li className="bet bet--onslip">
        <div className="bet__text">
          <p className="bet__reminder"><strong className="bet__name">{ name }</strong> to win the <strong className="bet__event">{ event }</strong> at <strong className="bet__odds">{ `${num}-${denom}` }</strong></p>
          <p className="bet__stake">A bet of £<input className="bet__stake__input" onChange={ this.handleStakeChange } value={ this.state.stake } /> nets you <strong className="bet__payout">£{ this.state.payout }</strong></p>
        </div>
        <div className="btn__group bet__controls">
          <button className="btn bet__control" onClick={ this.props.onUnsetSlipBetClick }>Remove bet from slip</button>
          <button className="btn btn--request bet__control" onClick={ () => this.props.onSetStakeClick(this.props.slipBet.get('bet_id'), this.state.stake) } >Set stake</button>
        </div>
      </li>
    )
  }
}
