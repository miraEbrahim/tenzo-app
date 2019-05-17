import React, { Component } from 'react';
import './App.css';
import Sales from './components/Sales'
import Shifts from './components/Shifts';



class App extends Component {
  

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
          <Sales />
          </div>
          <div className="col-4">
          <Shifts />
          </div>
         <div>
         
         </div>
        </div>
      </div>
    );
  }
}
  
export default App;
