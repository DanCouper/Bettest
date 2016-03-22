import React, { Component } from 'react'
import PostedBets from './PostedBets'
import Logo from './Logo'

export default class Options extends Component {
  state = {
    dropdownVisible: false
  }

  toggleDropDown = () => this.setState({ dropdownVisible: !this.state.dropdownVisible })

  render() {
    return(
      <nav className="btn__nav-group">
        <figure className="btn__nav-group__branding">
          <Logo />
        </figure>
        { this.props.oddsFormat === 'FRACTIONAL' ? (<button onClick={ () => this.props.onViewAsDecimalClick() } className="btn">Show decimal odds</button>)
                                                 : (<button onClick={ () => this.props.onViewAsFractionalClick() } className="btn">Show fractional odds</button>)}
        <button onClick={ this.toggleDropDown } className="btn btn--request">View Bet history</button>
        <PostedBets
          dropdownVisible={ this.state.dropdownVisible }
          postedBets={ this.props.postedBets }
          oddsFormat={ this.props.oddsFormat }
        />
      </nav>
    )
  }
}
