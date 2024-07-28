import React, { Component } from 'react'

export default class Clock extends Component {
    constructor(props){
        super(props);
        this.state = {
            date : new Date(),
            isRunning : false
        }
    }
    componentDidMount(){
        this.timerId = null;
    }

    componentWillUnmount(){
      clearInterval(this.timerId)
    }

    startClock = ()=>{
      if(!this.state.isRunning){
        this.timerId = setInterval(()=>this.tick(), 1000)
        this.setState({isRunning : true})
      }
    }

    stopClock = () =>{
      if(this.state.isRunning){
        clearInterval(this.timerId)
        this.setState({
          isRunning : false
        })
      }
    }
    
    tick = () =>{
      this.setState({
        date: new Date()
      })
    }
    
  render() {
    return (
      <div>
      <h1>Clock</h1>
      <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      <button onClick={this.startClock} disabled={this.state.isRunning}>Start</button>
      <button onClick={this.stopClock} disabled={!this.state.isRunning}>Stop</button>
      </div>
    )
  }
}

// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY
