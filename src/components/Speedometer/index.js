// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  increment=()=>
  {
    const{speed}=this.state
    if(speed<200){
    this.setState(prevState=>({speed:prevState.speed+10}))
    }
  }

  decrement=()=>
  {
    const{speed}=this.state
    if(speed>0){
    this.setState(prevState=>({speed:prevState.speed-10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="main">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
          alt="Speedometer"
          className="img"
        />
        <h1 className="para">
          Speed is {speed}mph
        </h1>
        <p className="des">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="btnmain">
          <button className="btn btn1" onClick={this.increment}>Accelerate</button>
          <button className="btn btn2" onClick={this.decrement}>Apply Brake</button>
        </div>
      </div>
    )
  }
}

export default Speedometer
