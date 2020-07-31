import React  from 'react'
import './lap-list.scss'
import { format } from '../../time';
/* Props:
  * list: list of laps
*/
class LapList extends React.Component {
  render() {
    const best = this.props.list.indexOf(Math.min(...this.props.list));
    const worst = this.props.list.indexOf(Math.max(...this.props.list));
    return (
      
      <ul className="lap-list">
      {this.props.list.map((value, index) => {
        return (
        <li 
          className={
            `lap-list-item ${ 
            (index === best) 
            ? 'best' 
            : (index === worst) 
            ? 'worst' 
            : '' 
            }`
          }
          key={index}>
          {
            `Lap ${index+1}: 
            ${format('hours',value)}:
            ${format('minutes',value)}:
            ${format('seconds',value)}
            `
          }
        </li>
        )}
      )}
      </ul>

    )
  }
}
export default LapList