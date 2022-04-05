import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

class Table extends Component {
  render() {
    return (
      <div className="table-responsive">
        <table className="table table-hover table-dark">
          <thead>
            <tr>
              <th scope="col"> Descrição </th>
              <th scope="col"> Tag </th>
              <th scope="col"> Método de pagamento </th>
              <th scope="col"> Valor </th>
              <th scope="col"> Moeda </th>
              <th scope="col"> Câmbio utilizado </th>
              <th scope="col"> Valor convertido </th>
              <th scope="col"> Moeda de conversão </th>
              <th scope="col"> Editar/Excluir </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
          </tbody>
        </table>
      </div>

    );
  }
}

/* Table.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  // email: state.user.email,
}); */

// export default connect(mapStateToProps)(Table);

export default Table;
