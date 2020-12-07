import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Counter.css'

class Counter extends Component{
  render(){
    return(
      <div className="counter">
      <CounterButton by={1}/>
      <CounterButton by={5}/>
      <CounterButton by={10}/>
      <CounterButton by={100}/>
      
      </div>
    )
  }
}


class CounterButton extends Component  {

//Define initial state in a constructor

constructor(){
  super(); //Error 1 

  this.state = {
    counter : 0
  }

  this.increment = this.increment.bind(this);
}

render(){

//const style = {fontSize : "50px", padding: "15px 30px"};

  return (
    <div className="counter">
    
    <button onClick={this.increment}>+{this.props.by}</button>
    <span className="count" 
   // style = {style}
    >{this.state.counter}</span>

    </div>
  ); 
}
 
 increment(){
 // console.log('increment');
  //this.state.counter++ ; Bad Practice
  this.setState({
    counter : this.state.counter + this.props.by
  });
}

    
  }


  CounterButton.defaultProps = {
    by : 1
  }

  CounterButton.propTypes = {
    by : PropTypes.number
  }


  export default  Counter;