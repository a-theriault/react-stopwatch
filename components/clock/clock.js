import React  from 'react'
import ClockItem from './clock-item'
import ActionBar from '../action-bar/action-bar'
import LapList from '../../lap-list'
import './clock.scss'
/*
 * props: 
 * action: callback to emit clock events
 */
class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      isActive: false,
      startTime: 0,
      currentTime: 0,
      prevLap: 0,
      clockRef: undefined,
      lapList: []
    };
  }
 // sets current clock ref
  moveClock() {
    const timer = setInterval(() => {
        this.setState({ currentTime: Date.now() - this.state.startTime })
      }, 1000)
    this.setState({ clockRef: timer })
  }
  start() {
    this.setState({
      isActive: true,
      currentTime: this.state.currentTime,
      startTime: Date.now() - this.state.currentTime
    })
    this.moveClock()
  }
  stop() {
    this.setState({ 
      isActive: false,
    })
    clearInterval(this.state.clockRef)
  }
  reset() {
    const nextLapList = [];
    this.setState({ 
      startTime: Date.now(), 
      currentTime: 0,
      prevLap: 0,
      lapList: nextLapList
    })
    this.stop()
    this.emitEvent({
      action: 'lap',
      next: nextLapList
    })
  }
  lap() {
    this.state.lapList.push(this.state.currentTime - this.state.prevLap)
    this.setState({
      prevLap: this.state.currentTime
    })
    this.emitEvent({
      action: 'lap',
      next: this.state.lapList
    })
  }
  emitEvent(actionItem) {
    this.props.action(actionItem)
  }
  // routes actions from action-bar
  clockActions = action => {
    switch(action) {
      case 'start':
        this.start()
        break
      case 'stop':
        this.stop()
        break
      case 'reset': 
        this.reset()
        break
      case 'lap':
        this.lap()
        break
      default:
        break
    }
  }

  render() {
    return (
      <section className="clock">
        <ul className="clock-face">
          <ClockItem 
            value={ this.state.currentTime } 
            type="hours">
          </ClockItem>
          <ClockItem 
            value={ this.state.currentTime } 
            type="minutes">
          </ClockItem>
          <ClockItem 
            value={ this.state.currentTime } 
            type="seconds">
          </ClockItem>
        </ul>
        <ActionBar action={this.clockActions} isActive={this.state.isActive}></ActionBar>
      </section>
    )
  }


}
export default Clock