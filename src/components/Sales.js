import React, { Component } from 'react';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
//import '../App.css'
import './sales.css'
import '../vendor/bootstrap.min.css';


class Sales extends Component {
  static propTypes = {
    sales: PropTypes.array.isRequired
  };

  state = {
    query: ''
  };

  updateQuery = query => {
    this.setState({ query: query.trim() });
  };

  clearQuery = () => {
    this.setState({ query: '' });
  };

  render() {
    const { sales } = this.props;
    const { query } = this.state;

    let showingSales;
    if (query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i');
      showingSales = sales.filter(sale => match.test(sale.time));
    } else {
      showingSales = sales;
    }

   showingSales.sort(sortBy('time'));
  //SalesList.js-To-DO-LINE-37*** limit sales result to fit page height
    return (
       <div className="container">
            <div className="row">

            <table id="table">
    <caption>Sales</caption>
    <thead>
      <tr>
        <th scope="col">Hour</th>
        <th scope="col">Sales</th>
       
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="hour"> 
        <ol className="sale-list">
            {showingSales.map(sale => (
            <li key={sale.time} >{sale.time}</li>
        ))}
        </ol>
        </td>
        <td data-label="sales"> <ol className="sale-list">{showingSales.map(sale => (
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

Sales.propTypes = {
  sales: PropTypes.array.isRequired
};

export default Sales;


