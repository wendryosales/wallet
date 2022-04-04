import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Balance from '../components/Balance';
import getCurrencies from './API/getCurrencies';
import { sendCurrencies } from '../actions';
import Form from '../components/Form';

class Wallet extends Component {
  async componentDidMount() {
    const { dispatchCurrencies } = this.props;
    const currencies = await getCurrencies();
    dispatchCurrencies(currencies);
  }

  render() {
    return (
      <div className="d-flex">
        <div className="bg-secondary">
          <Header />
          <div className="d-flex flex-column">
            <Balance />
            <Form />
          </div>
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
