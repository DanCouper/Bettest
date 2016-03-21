import React from 'react'
import OptionsContainer from '../containers/OptionsContainer'
import BetsContainer from '../containers/BetsContainer'
import SlipContainer from '../containers/SlipContainer'

export default class App extends React.Component {
  render() {
    return (
      <div className="betting-app__main__wrapper">
        <OptionsContainer />
        <main className="betting-app__main">
          <BetsContainer />
          <SlipContainer />
        </main>
      </div>
    )
  }
}
