import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {transactions} from './data/transactions';
//import { workShift } from './data/work_shifts';
import Sales from './components/Sales'



class App extends Component {
  state = {
    sales: transactions
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
          <Sales sales={this.state.sales} />
          </div>
         <div>
         
         </div>
        </div>
      </div>
    );
  }
}
  
export default App;
