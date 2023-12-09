import  { Component } from 'react'
import './App.css'

class CounterApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  subtraction = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      })
    }
  }

  reset = () => {
    this.setState({
      count: 0
    })
  }

  render() {
    return (
      <>
        <div className='MainBox'>
          <h1>COUNTER APP</h1>
          <p className='count'>{this.state.count}</p>
          <div className='buttons'>
            <button className='increment' onClick={this.increment}>+</button>
            <button className='subtraction' onClick={this.subtraction}>-</button>
            <button className='reset' onClick={this.reset}>Reset</button>
          </div>
        </div>
      </>
    )
  }
}

export default CounterApp
