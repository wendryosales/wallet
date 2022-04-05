import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Balance from '../components/Balance';
import getCurrencies from '../API/getCurrencies';
import { sendCurrencies } from '../actions';
import Form from '../components/Form';
import Table from '../components/Table';

class Wallet extends Component {
  async componentDidMount() {
    const { dispatchCurrencies } = this.props;
    const currencies = await getCurrencies();
    dispatchCurrencies(currencies);
  }

  render() {
    return (
      <div className="d-flex flex-column">
        <div className="bg-secondary">
          <Header />
        </div>
        <div className="d-flex flex-column">
          <Form />
          <Balance />
          <Table />
        </div>
      </div>
    );
  }
}

Wallet.propTypes = {
  dispatchCurrencies: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchCurrencies: (currencies) => dispatch(sendCurrencies(currencies)),
});

export default connect(null, mapDispatchToProps)(Wallet);
