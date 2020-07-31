import React, { Component } from 'react'
import { render } from 'react-dom'
import Logo from './components/logo/logo'
import Clock from './components/clock/clock'
import LapList from './components/lap-list/lap-list'
import moment from 'moment';
import './main.scss'

class App extends Component {
    constructor() {
    super();
    this.state = {
      lapList: []
    };
  }

  clockEvent = actionItem => {
    switch(actionItem.action) {
      case 'lap':
      this.setState({ lapList: actionItem.next })
        break;
    }
  }
  render() {
    return (
      <main className="viewport">
        <Logo className="header"></Logo>
        <section className="application">
          <Clock 
            action={ actionItem => this.clockEvent(actionItem) }
          >
          </Clock>
          <LapList 
            list={ this.state.lapList }
          >
          </LapList>
        </section>
      </main>
    );
  }
}
render(<App />, document.getElementById('root'))
