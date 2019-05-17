import React, { Component } from 'react';

//import '../App.css'
//import './shifts.css'
import './sales.css';
import '../vendor/bootstrap.min.css';
import { workShift } from '../data/work_shifts'


class Shifts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shifts : workShift
        }
    }
    render() {



    return (
       <div className="container">
            <div className="row">

            <table id="table">
    <caption>Shift Details</caption>
    <thead>
      <tr>
        <th className="table-head" scope="col">Start Time</th>
        <th className="table-head" scope="col">End Time</th>
        <th className="table-head" scope="col">Pay Rate</th>
        <th className="table-head" scope="col">Break Note</th>
       
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="table-data" data-label="start-time"> 
        <ol className="table-ol">
            {this.state.shifts.map(shift => (
            <li key={shift.break_notes}>{shift.start_time}</li>
        ))}
        </ol>
        </td>
        <td data-label="end-time"> 
        <ol className="table-ol">
        {this.state.shifts.map(shift => (
            <li key={shift.break_notes}>{shift.end_time}</li>
       
        ))}
        </ol>
        </td>
        <td data-label="end-time"> 
        <ol className="table-ol">
        {this.state.shifts.map(shift => (
            <li key={shift.break_notes}>{shift.pay_rate}</li>
       
        ))}
        </ol>
        </td>
        <td data-label="end-time"> 
        <ol className="table-ol">
        {this.state.shifts.map(shift => (
            <li key={shift.break_notes}>{shift.break_notes}</li>
       
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


export default Shifts;


