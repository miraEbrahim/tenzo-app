import React, { Component } from 'react';
import { transactions } from '../data/transactions';


//import '../App.css'
import './components.css'
import '../vendor/bootstrap.min.css';



//Finding the most profitable hour  of sales only

// extract an array of amount attribute values
let amountValues = Array.from(transactions, o => o.amount);


// expand an array argument as individual arguments
let amountMax = Math.max(...amountValues);

let maxObjects = transactions.filter(function(o) { return o.amount === amountMax; });

console.log('most Sales', maxObjects)

//Finding the least profitable hour  of sales only

// expand an array argument as individual arguments
let amountMin = Math.min(...amountValues);

let minObjects = transactions.filter(function(o) { return o.amount === amountMin; });


//Total Sales for each hour

//hour 10:00 - 11:00
//filter transactions for that specific hour
let timeTen = transactions.filter(transaction => {
    let ten = transaction.time >='10' && transaction.time <='11';
    return ten;
});
console.log('timeten',timeTen);
//create an array of the mount at the filtered hour (10-11)
let timeTenAmount = Array.from(timeTen, o => o.amount);
console.log('timetenamount',timeTenAmount);
//sum the created array to get the total per hour

const sumHrTen = timeTenAmount.reduce((total,num) => {
    return total +=  num;
});
console.log('sumHrTen',sumHrTen);

//hour 11:00 - 12:00
//filter transactions for that specific hour
let timeEleven = transactions.filter(transaction => {
    let eleven = transaction.time >='11' && transaction.time <='12';
    return eleven;
});
console.log('timeeleven',timeEleven);
//create an array of the mount at the filtered hour (10-11)
let timeElevenAmount = Array.from(timeEleven, o => o.amount);
console.log('timeElevenAmount',timeElevenAmount);
//sum the created array to get the total per hour

const sumHrEleven = timeElevenAmount.reduce((total,num) => {
    return total +=  num;
});
console.log('sumHrEleven',sumHrEleven);

//hour 12:00 - 13:00
//filter transactions for that specific hour
let timeTwelve = transactions.filter(transaction => {
    let twelve = transaction.time >='12' && transaction.time <='13';
    return twelve;
});
console.log('timeTwelve',timeTwelve);
//create an array of the mount at the filtered hour (10-11)
let timeTwelveAmount = Array.from(timeTwelve, o => o.amount);
console.log('timeTwelveAmount',timeTwelveAmount);
//sum the created array to get the total per hour

const sumHrTwelve = timeTwelveAmount.reduce((total,num) => {
    return total +=  num;
});
console.log('sumHrTwelve',sumHrTwelve);

//hour 13:00 - 14:00
//filter transactions for that specific hour
let timeThirtn = transactions.filter(transaction => {
    let thirtn = transaction.time >='13' && transaction.time <='14';
    return thirtn;
});
console.log('timeThirtn',timeThirtn);
//create an array of the mount at the filtered hour (10-11)
let timeThirtnAmount = Array.from(timeThirtn, o => o.amount);
console.log('timeThirtnAmount',timeThirtnAmount);
//sum the created array to get the total per hour

const sumHrThirtn = timeThirtnAmount.reduce((total,num) => {
    return total +=  num;
});
console.log('sumHrThirtn',sumHrThirtn);  

//hour 14:00 - 15:00
//filter transactions for that specific hour
let timeFortn = transactions.filter(transaction => {
    let fortn = transaction.time >='14' && transaction.time <='15';
    return fortn;
});
console.log('timeFortn',timeFortn);
//create an array of the mount at the filtered hour (10-11)
let timeFortnAmount = Array.from(timeFortn, o => o.amount);
console.log('timeFortnAmount',timeFortnAmount);
//sum the created array to get the total per hour

const sumHrFortn = timeFortnAmount.reduce((total,num) => {
    return total +=  num;
});
console.log('sumHrFortn',sumHrFortn);
  
//hour 15:00 - 16:00
//filter transactions for that specific hour
let timeFiftn = transactions.filter(transaction => {
    let fiftn = transaction.time >='15' && transaction.time <='16';
    return fiftn;
});
console.log('timeFiftn',timeFiftn);
//create an array of the mount at the filtered hour (10-11)
let timeFiftnAmount = Array.from(timeFiftn, o => o.amount);
console.log('timeFiftnAmount',timeFiftnAmount);
//sum the created array to get the total per hour

const sumHrFiftn = timeFiftnAmount.reduce((total,num) => {
    return total +=  num;
});
console.log('sumHrFiftn',sumHrFiftn);


//hour 16:00 - 17:00
//filter transactions for that specific hour
let timeSixtn = transactions.filter(transaction => {
    let sixtn = transaction.time >='16' && transaction.time <='17';
    return sixtn;
});
console.log('timeSixtn',timeSixtn);
//create an array of the mount at the filtered hour (10-11)
let timeSixtnAmount = Array.from(timeSixtn, o => o.amount);
console.log('timeSixtnAmount',timeSixtnAmount);
//sum the created array to get the total per hour

const sumHrSixtn = timeSixtnAmount.reduce((total,num) => {
    return total +=  num;
});
console.log('sumHrSixtn',sumHrSixtn);

//hour 17:00 - 18:00
//filter transactions for that specific hour
let timeSevtn = transactions.filter(transaction => {
    let sevtn = transaction.time >='17' && transaction.time <='18';
    return sevtn;
});
console.log('timeSevtn',timeSevtn);
//create an array of the mount at the filtered hour (10-11)
let timeSevtnAmount = Array.from(timeSevtn, o => o.amount);
console.log('timeSevtnAmount',timeSevtnAmount);
//sum the created array to get the total per hour

const sumHrSevtn = timeSevtnAmount.reduce((total,num) => {
    return total +=  num;
});
console.log('sumHrSevtn',sumHrSevtn);

//hour 18:00 - 19:00
//filter transactions for that specific hour
let timeEtn = transactions.filter(transaction => {
    let etn = transaction.time >='17' && transaction.time <='18';
    return etn;
});
console.log('timeEtn',timeEtn);
//create an array of the mount at the filtered hour (10-11)
let timeEtnAmount = Array.from(timeEtn, o => o.amount);
console.log('timeEtnAmount',timeEtnAmount);
//sum the created array to get the total per hour

const sumHrEtn = timeEtnAmount.reduce((total,num) => {
    return total +=  num;
});
console.log('sumHrEtn',sumHrEtn);

//hour 19:00 - 20:00
//filter transactions for that specific hour
let timenitn = transactions.filter(transaction => {
    let nitn = transaction.time >='19' && transaction.time <='20';
    return nitn;
});
console.log('timenitn',timenitn);
//create an array of the mount at the filtered hour (10-11)
let timenitnAmount = Array.from(timenitn, o => o.amount);
console.log('timenitnAmount',timenitnAmount);
//sum the created array to get the total per hour

const sumHrnitn = timenitnAmount.reduce((total,num) => {
    return total +=  num;
});
console.log('sumHrnitn',sumHrnitn);

//hour 20:00 - 21:00
//filter transactions for that specific hour
let timeTwntn = transactions.filter(transaction => {
    let twntn = transaction.time >='20' && transaction.time <='21';
    return twntn;
});
console.log('timeTwntn',timeTwntn);
//create an array of the mount at the filtered hour (10-11)
let timeTwntnAmount = Array.from(timeTwntn, o => o.amount);
console.log('timeTwntnAmount',timeTwntnAmount);


//hour 21:00 - 22:00
//filter transactions for that specific hour
let timeTwntwo = transactions.filter(transaction => {
    let twntwo = transaction.time >='21' && transaction.time <='22';
    return twntwo;
});
console.log('timeTwntwo',timeTwntwo);
//create an array of the mount at the filtered hour (10-11)
let timeTwntwoAmount = Array.from(timeTwntwo, o => o.amount);
console.log('timeTwntwoAmount',timeTwntwoAmount);
//sum the created array to get the total per hour

const sumHrTwntwo = timeTwntwoAmount.reduce((total,num) => {
    return total +=  num;
});
console.log('sumHrTwntwo',sumHrTwntwo);



console.log('Least Sales', minObjects)

class Sales extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sales : transactions,
            max: maxObjects,
            min: minObjects,
            sumHrTen: sumHrTen,
            sumHrEleven : sumHrEleven,
            sumHrTwelve : sumHrTwelve,
            sumHrThirtn : sumHrThirtn,
            sumHrFortn  : sumHrFortn,
            sumHrFiftn  : sumHrFiftn,
            sumHrSixtn  : sumHrSixtn,
            sumHrSevtn  : sumHrSevtn,
            sumHrEtn    : sumHrEtn,
            sumHrnitn   : sumHrnitn,
            sumHrTwntwo : sumHrTwntwo
            
        }
    }






    render() {



    return (
        <div className="sales">
       <div className="container">
            <div className="row">

            <table className="table-container" id="table">
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


