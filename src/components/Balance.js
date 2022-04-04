import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import dolar from '../assets/dolar.svg';
import '../styles/balance.css';

class Balance extends Component {
  price = () => {
    const { expenses } = this.props;
    let total = 0;
    expenses.forEach((element) => {
      const value = element.value ? element.value : 0;
      const { exchangeRates, currency } = element;
      total += parseFloat(exchangeRates[currency].ask) * parseFloat(value);
    });
    return total;
  }

  render() {
    return (
      <div className="balance card bg-dark text-white d-flex">
        <div className="card-img-overlay">
          <h5 className="card-title">Saldo</h5>
          <p
            className="card-text"
            data-testid="total-field"
          >
            { this.price().toFixed(2) }
          </p>
          <span data-testid="header-currency-field"> BRL </span>
          <p className="card-text">Last updated 3 mins ago</p>
        </div>
        <img src={ dolar } className="card-img" alt="saldo" />
      </div>);
  }
}

Balance.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Balance);
