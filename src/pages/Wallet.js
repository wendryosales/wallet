import React, { Component } from 'react';
import Header from '../components/Header';
import Balance from '../components/Balance';

class Wallet extends Component {
  render() {
    return (
      <div className="d-flex">
        <div className="w-25">
          navbar
        </div>
        <div className="w-75 bg-secondary">
          <Header />
          <div className="d-flex">
            <Balance />
          </div>
        </div>
      </div>
    );
  }
}

export default Wallet;
