import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      onOffButton: true,
    };
  }

  turnOn = () => {
    const validation = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
    const { email, password } = this.state;
    const emailValidated = email.match(validation);
    const minCaracteres = 6;
    const passwordValidated = password.length >= minCaracteres;
    if (emailValidated && passwordValidated) {
      this.setState({
        onOffButton: false,
      });
    } else { this.setState({ onOffButton: true }); }
  }

  handleChange = ({ target }) => {
    if (target.name === 'email') {
      this.setState({
        email: target.value,
      }, () => this.turnOn(target));
    }
    if (target.name === 'password') {
      this.setState({
        password: target.value,
      }, () => this.turnOn(target));
    }
  }

  handleClickSubmit = () => {
    const { email, password } = this.state;
    const { dispatchUser, history } = this.props;
    const user = { email, password };
    dispatchUser(user);
    history.push('/carteira');
  }

  render() {
    const { email, password, onOffButton } = this.state;
    return (
      <div className="col-md-6 m-auto">
        <form>
          <div className="form-group">
            <label htmlFor="email">
              Email address
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                data-testid="email-input"
                autoComplete="email"
                onChange={ this.handleChange }
                value={ email }
              />
              <small
                id="emailHelp"
                className="form-text text-muted"
              >
                Email that you have used while registration.
              </small>
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="password">
              Password
              <input
                type="password"
                name="password"
                className="form-control"
                id="password"
                placeholder="Password"
                data-testid="password-input"
                autoComplete="current-password"
                onChange={ this.handleChange }
                value={ password }
              />
            </label>
          </div>
          <button
            type="button"
            disabled={ onOffButton }
            className="btn btn-primary float-right"
            onClick={ this.handleClickSubmit }
          >
            Entrar
          </button>
        </form>
      </div>

    );
  }
}

Login.propTypes = {
  dispatchUser: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchUser: (user) => dispatch(userAction(user)),
});

export default connect(null, mapDispatchToProps)(Login);
