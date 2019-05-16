import React from 'react';
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
    // this.props.login(this.state.credentials).then(() => {
    //   this.props.history.push('/protected');
    // });
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
          <button className="Login__Button">Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;
