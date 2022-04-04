import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <header className="d-flex justify-content-between">
        <div className="form-check form-switch">
          <label
            className="form-check-label"
            htmlFor="flexSwitchCheck"
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheck"
            />
            Dark mode
          </label>
        </div>
        <div>
          <span data-testid="email-field">
            {email}
          </span>
        </div>

      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Header);
