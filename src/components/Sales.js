import React, { Component } from "react";

import { transactions } from "../data/transactions";

import "../App.css";
import "../vendor/bootstrap.min.css";

//Total Resturate Sales
// let totalSales = transactions.map(element => element.amount).reduce((total, amount) => total + amount, 0);

class Sales extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sales: transactions
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="table-responsive">
            <table id="table" className=" table table-bordered table-dark">
              <caption>Sales Transactions</caption>
              <thead>
                <tr className="text-center table-head green-text">
                  <th scope="col">Time</th>
                  <th scope="col">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td data-label="time">
                    <ol className="table-ol">
                      {this.state.sales.map(sale => (
                        <li key={sale.time}>{sale.time}</li>
                      ))}
                    </ol>
                  </td>
                  <td data-label="amount">
                    <ol className="table-ol">
                      {this.state.sales.map(sale => (
                        <li key={sale.time}>{sale.amount.toFixed(2)}</li>
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
