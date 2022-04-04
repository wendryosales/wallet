import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Balance from '../components/Balance';
import getCurrencies from './API/getCurrencies';
import { sendCurrencies } from '../actions';

class Wallet extends Component {
  async componentDidMount() {
    const { dispatchCurrencies } = this.props;
    const currencies = await getCurrencies();
    dispatchCurrencies(currencies);
  }

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

Wallet.propTypes = {
  dispatchCurrencies: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchCurrencies: (currencies) => dispatch(sendCurrencies(currencies)),
});

export default connect(null, mapDispatchToProps)(Wallet);
