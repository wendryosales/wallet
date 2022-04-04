import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { currencies } = this.props;
    return (
      <div className="d-flex">
        <label htmlFor="value-input" className="form-label">
          Valor:
          <input
            type="text"
            className="form-control is-invalid"
            name="value-input"
            id="value-input"
            data-testid="value-input"
          />
          <div className="invalid-feedback">
            Validation message
          </div>
        </label>
        <div className="mb-3">
          <label htmlFor="select-currency" className="form-label">
            Moeda:
            <select
              className="form-select"
              name="select-currency"
              id="select-currency"
              data-testid="currency-input"
            >
              {/* <option selected>Select one</option> */}
              { currencies.map((el) => (
                <option key={ el } value={ el }>
                  { el}
                </option>))}
            </select>
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="method-input" className="form-label">
            Metódo de pagamento:
            <select
              className="form-select"
              name="method-input"
              id="method-input"
              data-testid="method-input"
            >
              <option selected value="dinheiro">Dinheiro</option>
              <option value="credito">Cartão de crédito</option>
              <option value="debito">Cartão de débito</option>
            </select>
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="tag-input" className="form-label">
            Categoria:
            <select
              className="form-select"
              name="tag-input"
              id="tag-input"
              data-testid="tag-input"
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
            className="form-control is-invalid"
            name="description-input"
            id="description-input"
            data-testid="description-input"
          />
          <div className="invalid-feedback">
            Validation message
          </div>
        </label>
      </div>
    );
  }
}

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string),
};

Form.defaultProps = {
  currencies: [],
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(Form);
