// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  getRandomNum = () => {
    const newRandom = Math.ceil(Math.random() * 100)

    this.setState({count: newRandom})
  }

  render() {
    const {count} = this.state

    return (
      <div className="app-container">
        <div className="container">
          <h1 className="headding">Random Number </h1>

          <p className="note">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" className="button" onClick={this.getRandomNum}>
            Generate
          </button>
          <p className="count1">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
