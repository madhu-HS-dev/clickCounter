// Write your code here

import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="counter-container">
        <h1 className="heading">
          The Button has been clicked{' '}
          <span className="count-value">{count}</span> times
        </h1>
        <p className="paragraph">Click the button to increase the count!</p>
        <button className="button" onClick={this.onIncrement} type="button">
          Click me
        </button>
      </div>
    )
  }
}

export default ClickCounter
