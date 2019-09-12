import React, { Component } from 'react';
import './TopBar.css';
import { FiLogOut, FiUserPlus } from 'react-icons/fi';

class TopBar extends Component {
  logout = () => {
    localStorage.setItem('token', '');
    window.location.reload();
  };

  render() {
    return (
      <div className="TopBar">
        <div className="TopBar__inner">
          <div className="TopBar__add-contact" onClick={this.props.addContact}>
            <div>Add Friend</div>
            <FiUserPlus color="#fafffd" size="24" />
          </div>
          <div className="TopBar__logout" onClick={this.logout}>
            <div>Logout</div>
            <FiLogOut color="#fafffd" size="24" />
          </div>
        </div>
      </div>
    );
  }
}

export default TopBar;
