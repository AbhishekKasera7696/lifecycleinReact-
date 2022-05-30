import React, { Component } from 'react';
import Counter1 from "./components/Counter1"

export default class App extends Component {

 constructor(){
   super();
   this.state = {
     count : 0
   }
 }


 componentDidMount(){
   console.log("component is mounting")
 }

 componentWillUnmount(){
   console.log("componentWillUnmount: removed ")
 }

 increment(){
   this.setState({count:this.state.count + 1})
 }

  render() {
    return (
      <div>
        <Counter1 number={this.state.count}></Counter1>
        {/* <button onClick={this.increment.bind(this)}>Click me</button> */}
        {/* <button onClick={()=>{this.increment()}}>Click me</button> */}
      </div>
    )
  }
}
