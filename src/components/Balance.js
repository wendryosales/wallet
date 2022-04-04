import React, { Component } from 'react';
import dolar from '../images/dolar.svg';
import '../styles/balance.css';

class Balance extends Component {
  render() {
    return (
      <div className="balance card bg-dark text-white d-flex">
        <div className="card-img-overlay">
          <h5 className="card-title">Saldo</h5>
          <p
            className="card-text"
            data-testid="total-field"
          >
            0
            <span data-testid="header-currency-field"> BRL </span>
          </p>
          <p className="card-text">Last updated 3 mins ago</p>
        </div>
        <img src={ dolar } className="card-img" alt="saldo" />
      </div>);
  }
}

export default Balance;
