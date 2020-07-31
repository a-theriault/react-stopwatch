import React  from 'react'
import { format } from '../../time'
import './clock-item.scss'
/* Props:
  * value: milliseconds
  * type: display format (hours, mins, seconds)
*/
class ClockItem extends React.Component {
  render() {
    let out = format(this.props.type, this.props.value)
    return <li className="clock-item" aria-valuenow={out}>{ out }</li>
  }
}
export default ClockItem