import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  };

  increaseCount(type){
    if (type === "in"){
      this.setState({
        count: this.state.count + 1
      })
    }else {
      this.setState({
        count: this.state.count -1
      })
    }
  }

  render() {
    return(
      <div>
        <h2>Hello! I am a component.</h2>
        <div>
          <p>Counter: {this.state.count}</p>
          <button onClick={this.increaseCount.bind(this, "in")}>Increase++</button>
          <button onClick={this.increaseCount.bind(this, "de")}>Decrease--</button>
        </div>
      </div>
    )
  }
}

export default MyComponent;
