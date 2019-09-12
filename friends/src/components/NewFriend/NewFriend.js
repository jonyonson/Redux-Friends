import React, { Component } from 'react';
import './NewFriend.css';
import { withRouter } from 'react-router-dom';
class NewFriend extends Component {
  state = {
    name: '',
    email: '',
    age: null,
    showThisForm: true,
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, email, age } = this.state;
    const NewFriend = {
      name,
      email,
      age,
    };
    this.props.addFriend(NewFriend);
    this.setState({ showThisForm: false });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return this.state.showThisForm ? (
      <div className="NewFriend FriendCard">
        <form className="NewFriend__form" onSubmit={this.handleSubmit}>
          <input
            className="NewFriend__name"
            name="name"
            type="text"
            placeholder="Name"
            autoCapitalize="none"
            autoComplete="off"
            spellCheck="false"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <br />
          <input
            className="NewFriend__email"
            name="email"
            type="email"
            autoCapitalize="none"
            autoComplete="off"
            spellCheck="false"
            placeholder="Email Address"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <br />

          <input
            className="NewFriend__age"
            name="age"
            type="number"
            autoCapitalize="none"
            autoComplete="off"
            spellCheck="false"
            placeholder="Age"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <div className="NewFriend__button-group">
            <div
              className="NewFriend__cancel-btn"
              onClick={this.props.hideForm}
            >
              Cancel
            </div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    ) : null;
  }
}

export default withRouter(NewFriend);
