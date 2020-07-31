import React  from 'react'
import './action-bar.scss'
/* Props:
  * isActive: clock status
  * action: callback
*/
class ActionBar extends React.Component {
  render() {
    return (
      <section className="action-bar">
        <button className={ 
                  `action-button ${!!(this.props.isActive) ? 'stop' : 'start'}` 
                } 
                onClick={ () => 
                  (!!this.props.isActive) 
                  ? this.props.action('stop') 
                  : this.props.action('start') 
        }>
          {(!!this.props.isActive) ? 'Stop' : 'Start' }
        </button> 
        <button className="action-button" 
                onClick={ () => 
                  this.props.action('reset') 
        }>
          Reset
        </button> 
        <button className={`action-button lap`}
                disabled={!this.props.isActive}
                onClick={ () =>
                  this.props.action('lap')
                }>
          Lap
        </button>
        
      </section>
    )
  }
}
export default ActionBar
