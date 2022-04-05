import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrentPrice, sendExpenses } from '../actions';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      value: '0',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    };
  }

  handleClick = async () => {
    const { expenses,
      dispatchExpense,
      getCurrentPrice } = this.props;
    const { value, currency, method, tag, description } = this.state;
    const newExpenses = expenses.slice();
    await getCurrentPrice();
    const { currentPrice } = this.props;
    const currentExpense = {
      id: expenses.length,
      value,
      currency,
      method,
      tag,
      description,
      exchangeRates: currentPrice,
    };
    newExpenses.push(currentExpense);
    dispatchExpense(newExpenses);

    this.setState({
      value: 0,
      description: '',
    });
  }

  handleChange = ({ target }) => {
    switch (target.name) {
    case 'value':
      this.setState({ value: target.value });
      break;
    case 'currency':
      this.setState({ currency: target.value });
      break;
    case 'method':
      this.setState({ method: target.value });
      break;
    case 'tag':
      this.setState({ tag: target.value });
      break;
    case 'description':
      this.setState({ description: target.value });
      break;
    default:
      break;
    }
  }

  render() {
    const { currencies } = this.props;
    const { value, description } = this.state;
    return (
      <div className="d-flex align-items-start justify-content-around">
        <label htmlFor="value-input" className="form-label">
          Valor:
          <input
            type="text"
            className="form-control is-valid"
            name="value"
            id="value-input"
            data-testid="value-input"
            value={ value }
            onChange={ this.handleChange }
          />
          <div className="invalid-feedback">
            Validation message
          </div>
        </label>
        <div className="">
          <label htmlFor="select-currency" className="form-label">
            Moeda:
            <select
              className="form-select is-valid"
              name="currency"
              id="select-currency"
              data-testid="currency-input"
              onChange={ this.handleChange }
            >
              {/* <option selected>Select one</option> */}
              { currencies.map((el) => (
                <option key={ el } value={ el }>
                  { el}
                </option>))}
            </select>
          </label>
        </div>
        <div className="">
          <label htmlFor="method-input" className="form-label">
            Metódo de pagamento:
            <select
              className="form-select is-valid"
              name="method"
              id="method-input"
              data-testid="method-input"
              onChange={ this.handleChange }
            >
              <option selected value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
        </div>
        <div className="">
          <label htmlFor="tag-input" className="form-label">
            Categoria:
            <select
              className="form-select is-valid"
              name="tag"
              id="tag-input"
              data-testid="tag-input"
              onChange={ this.handleChange }
            >
              <option selected value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
        </div>
        <label htmlFor="description-input" className="form-label">
          Descrição:
          <input
            type="text"
            className="form-control is-valid"
            name="description"
            id="description-input"
            value={ description }
            data-testid="description-input"
            onChange={ this.handleChange }
          />
          <div className="invalid-feedback">
            Validation message
          </div>
        </label>
        <div className="d-flex align-items-center" style={ { height: '70px' } }>
          <button
            type="button"
            className="btn btn-dark"
            onClick={ this.handleClick }
          >
            Adicionar despesa
          </button>
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string),
  expenses: PropTypes.arrayOf(PropTypes.string, PropTypes.object),
  dispatchExpense: PropTypes.func.isRequired,
  getCurrentPrice: PropTypes.func.isRequired,
  currentPrice: PropTypes.objectOf(PropTypes.string).isRequired,
};

Form.defaultProps = {
  currencies: [''],
  expenses: [''],
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  currentPrice: state.fetchPrice.currentPrice,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchExpense: (expense) => dispatch(sendExpenses(expense)),
  getCurrentPrice: () => dispatch(fetchCurrentPrice()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
