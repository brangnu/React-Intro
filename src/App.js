import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import ItemFilter from './components/ItemFilter';
import FetchData from './components/FetchData';

var items =  [
   {id: 1, student: "one"},
   {id: 2, student: "two"},
   {id: 3, student: "three"},
   {id: 4, student: "four"},
   {id: 5, student: "five"},
]

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="container">
          <MyComponent />
          <hr className="hr"/>

          <ItemFilter items={items} />
          <hr />
          
          <FetchData url={"https://jsonplaceholder.typicode.com/photos"}/>
        </div>
      </div>
    );
  }
}

export default App;
