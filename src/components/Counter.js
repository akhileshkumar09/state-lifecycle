import React, { Component } from 'react'

export default class Counter extends Component {
    componentDidUpdate(prevprops, prevstate){
        if(prevprops.number !== this.props.number){
            console.log("component updated")
        }
    }
  render() {
    return (
      <div>
        <h2>Count : {this.props.number}</h2>
      </div>
    )
  }
}
