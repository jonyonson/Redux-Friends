import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions';
import Loader from 'react-loader-spinner';
import './Login.css';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: '',
    },
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  login = e => {
    e.preventDefault();
    this.props.login(this.state.credentials).then(() => {
      this.props.history.push('/');
    });
  };

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <br />
          <button className="Login__Button">
            {this.props.isLoggingIn ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
              'Log in'
            )}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggingIn: state.isLoggingIn,
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
