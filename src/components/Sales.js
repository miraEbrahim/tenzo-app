import React, { Component } from 'react';
import { transactions } from '../data/transactions';


//import '../App.css'
import './sales.css'
import '../vendor/bootstrap.min.css';


class Sales extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sales : transactions
        }
    }
    render() {



    return (
       <div className="container">
            <div className="row">

            <table id="table">
    <caption>Sales Transactions</caption>
    <thead>
      <tr>
        <th className="table-head" scope="col">Time</th>
        <th className="table-head" scope="col">Amount</th>
        </tr>
    </thead>
    <tbody>
      <tr>
        <td className="table-data" data-label="time"> 
        <ol className="table-ol">
            {this.state.sales.map(sale => (
            <li key={sale.time}>{sale.time}</li>
        ))}
        </ol>
        </td>
        <td data-label="end-time"> 
        <ol className="table-ol">
        {this.state.sales.map(sale => (
            <li key={sale.time}>{sale.amount}</li>
       
        ))}
        </ol>
        </td>
        
        
      </tr>
      
    </tbody>
  </table>
    </div>
    </div>
                
    );
  }
}

export default Sales;


