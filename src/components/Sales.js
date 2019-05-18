import React, { Component } from 'react';
import { transactions } from '../data/transactions';


//import '../App.css'
import './components.css'
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

            <table className="table-container table table-dark" id="table">
    <caption>Sales Transactions</caption>
    <thead>
      <tr>
        <th className="table-head-sales" scope="col">Time</th>
        <th className="table-head-sales" scope="col">Amount</th>
        </tr>
    </thead>
    <tbody>
      <tr>
        <td className="table-data-sales" data-label="time"> 
        <ol className="table-ol">
            {this.state.sales.map(sale => (
            <li key={sale.time}>{sale.time}</li>
        ))}
        </ol>
        </td>
        <td className="table-data-sales"data-label="amount"> 
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
    );
  }
}

export default Sales;


