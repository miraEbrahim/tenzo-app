import React, { Component } from 'react';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
//import '../App.css'
//import './shifts.css'
import '../vendor/bootstrap.min.css';


class Shifts extends Component {
  static propTypes = {
    shifts: PropTypes.array.isRequired
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
    const { shifts } = this.props;
    const { query } = this.state;

    let showingShifts;
    if (query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i');
      showingShifts = shifts.filter(sale => match.test(sale.time));
    } else {
      showingShifts = shifts;
    }

   showingShifts.sort(sortBy('time'));
  //ShiftsList.js-To-DO-LINE-37*** limit Shifts result to fit page height
    return (
       <div className="container">
            <div className="row">

            <table id="table">
    <caption>Shifts</caption>
    <thead>
      <tr>
        <th scope="col">Hour</th>
        <th scope="col">Shifts</th>
       
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="hour"> 
        <ol className="sale-list">
            {showingShifts.map(sale => (
            <li key={sale.time} >{sale.time}</li>
        ))}
        </ol>
        </td>
        <td data-label="shifts"> <ol className="sale-list">{showingShifts.map(sale => (
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

Shifts.propTypes = {
  shifts: PropTypes.array.isRequired
};

export default Shifts;


