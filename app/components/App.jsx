import React from 'react'
import BetsContainer from '../containers/BetsContainer'
import SlipContainer from '../containers/SlipContainer'

export default class App extends React.Component {
  render() {
    return (
      <main className="betting-app__main">
        <BetsContainer />
        <SlipContainer />
      </main>
    )
  }
}
