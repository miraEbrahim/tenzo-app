import React, { Component } from 'react';
import { transactions } from '../data/transactions';
import '../App.css'
import '../vendor/bootstrap.min.css';




//Total Resturate Sales
// let totalSales = transactions.map(element => element.amount).reduce((total, amount) => total + amount, 0); 

class Sales extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sales : transactions
            
        }
    }






    render() {



    return (
        <div className="sales">
       <div className="container">
            <div className="row">
            <div class="table-responsive">
            <table className="able-container table table-bordered table-dark" id="table">
    <caption>Sales Transactions</caption>
    <thead>
      <tr text-center table-head purple-text>
        <th scope="col">Time</th>
        <th scope="col">Amount</th>
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
        <td className="table-data"data-label="amount"> 
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
    </div>
           










                </div>
    );
  }
}

export default Sales;


