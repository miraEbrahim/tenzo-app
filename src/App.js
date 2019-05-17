import React, { Component } from 'react';
import './App.css';
import Sales from './components/Sales'
import Shifts from './components/Shifts';



class App extends Component {
  

  render() {
    return (
      <div className="app">
        <div className="container">
         
            <Sales />
          
            <Shifts />
          </div>
        
      </div>
    );
  }
}
  
export default App;
