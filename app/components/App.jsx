import React from 'react'
import BetsContainer from '../containers/BetsContainer'
import SlipContainer from '../containers/SlipContainer'

export default class App extends React.Component {
  render() {
    return (
      <section className="betting-area">
        <BetsContainer />
        <SlipContainer />
      </section>
    )
  }
}
