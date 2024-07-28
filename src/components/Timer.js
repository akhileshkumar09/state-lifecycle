import React, { Component } from 'react'

export default class Timer extends Component {
    constructor(props){
        super(props)
        this.state={
            inputMinutes :'',
            remainingTime:0,
            isRunning: false,
            message : ''
        }
    }
    handleInputChnage = (event) =>{
      this.setState({inputMinutes : event.target.value});
    };

    startCountDown = ()=>{
      const {inputMinutes} = this.state;
      const seconds = inputMinutes*60;
      
      if(isNaN(seconds) || seconds <= 0){
        this.setState({message: 'Please enter a valid number of minutes'});
        return;
      }

      this.setState({
        remainingTime : seconds,
        isRunning : true,
        message : ''
      })

      this.TimerID = setInterval(()=>this.tick(), 1000)
    }



    tick = ()=>{
      this.setState((preState)=>{
        if(preState.remainingTime <= 1){
          clearInterval(this.TimerID);
          return ({remainingTime : 0, isRunning : false, message : 'Time is up!'})
        }
        return {remainingTime : preState.remainingTime - 1}
      })
    }
  render() {
    const {inputMinutes, remainingTime, isRunning, message} = this.state;
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    return (
      <div>
        <h1>CountDown Timer</h1>
        <div>
          <input
           type='number'
           value={inputMinutes}
           onChange={this.handleInputChnage}
           placeholder='Enter time in minutes'
           disabled = {isRunning}
           />
           <button onClick={this.startCountDown} disabled={isRunning}>Start</button> 
        </div>
        <div>
          <h2>Time remaining: {minutes} : {seconds > 10 ?` 0${seconds}` : seconds}</h2>
          {message && <h3>{message}</h3>}
        </div>
      </div>
    )
  }
}
