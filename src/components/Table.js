import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
  render() {
    const { expenses } = this.props;

    return (
      <div className="table-responsive">
        <table className="table table-hover table-dark">
          <thead>
            <tr>
              <th scope="col"> # </th>
              <th scope="col"> Valor </th>
              <th scope="col"> Moeda </th>
              <th scope="col"> Método de pagamento </th>
              <th scope="col"> Tag </th>
              <th scope="col"> Moeda de conversão </th>
              <th scope="col"> Câmbio utilizado </th>
              <th scope="col"> Valor convertido </th>
              <th scope="col"> Descrição </th>
              <th scope="col"> Editar/Excluir </th>
            </tr>
          </thead>
          <tbody>
            { expenses.map((element, index) => {
              const { currency } = element;
              const data = element.exchangeRates[currency];
              const total = parseFloat(element.value) * parseFloat(data.ask);
              const { id, value, method, tag, description } = element;
              const name = currency === 'USD' ? 'Dólar Comercial' : data.name;
              return (
                <tr key={ id }>
                  <th scope="row">{index}</th>
                  <td role="cell">{parseFloat(value).toFixed(2)}</td>
                  <td role="cell">{name.replace('/Real Brasileiro', '')}</td>
                  <td role="cell">{method}</td>
                  <td role="cell">{tag}</td>
                  <td role="cell">Real</td>
                  <td role="cell">{parseFloat(data.ask).toFixed(2)}</td>
                  <td role="cell">{total.toFixed(2)}</td>
                  <td role="cell">{description}</td>
                  <td role="cell">icons</td>
                </tr>
              );
            }) }
          </tbody>
        </table>
      </div>

    );
  }
}

Table.propTypes = {
  expenses: PropTypes.objectOf(PropTypes.string, PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
