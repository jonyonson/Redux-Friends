import React from 'react';
import { connect } from 'react-redux';
import { getFriends, addFriend } from '../../actions';
import { FiUserPlus, FiLogOut } from 'react-icons/fi';
import Loader from 'react-loader-spinner';
import FriendCard from '../FriendCard/FriendCard';
import NewFriend from '../NewFriend/NewFriend';
import { withRouter } from 'react-router-dom';
// import css
import './FriendsList.css';
import '../TopBar/TopBar.css';

class FriendsList extends React.Component {
  state = {
    showNewFriendForm: false,
  };

  componentDidMount() {
    this.props.getFriends();
  }

  logout = () => {
    localStorage.setItem('token', '');
    // window.location.reload();
    this.props.history.push('/');
  };

  toggleNewFriendForm = e => {
    const showNewFriendForm = this.state.showNewFriendForm;
    this.setState({ showNewFriendForm: !showNewFriendForm });
  };

  render() {
    return this.props.fetchingFriends ? (
      <>
        <div className="TopBar">
          <div className="TopBar__inner">
            <div
              className="TopBar__add-contact"
              onClick={this.toggleNewFriendForm}
            >
              <div>Add Friend</div>
              <FiUserPlus color="#fafffd" size="24" />
            </div>
            <div className="TopBar__logout" onClick={this.logout}>
              <div>Logout</div>
              <FiLogOut color="#fafffd" size="24" />
            </div>
          </div>
        </div>
        <div className="FriendsList__Loading">
          <Loader type="Grid" color="#342E37" />
        </div>
      </>
    ) : (
      <>
        <div className="TopBar">
          <div className="TopBar__inner">
            <div
              className="TopBar__add-contact"
              onClick={this.toggleNewFriendForm}
            >
              <div>Add Friend</div>
              <FiUserPlus color="#fafffd" size="24" />
            </div>
            <div className="TopBar__logout" onClick={this.logout}>
              <div>Logout</div>
              <FiLogOut color="#fafffd" size="24" />
            </div>
          </div>
        </div>
        {this.state.showNewFriendForm && (
          <NewFriend
            addFriend={this.props.addFriend}
            hideForm={this.toggleNewFriendForm}
          />
        )}

        <div className="FriendsList">
          {this.props.friends.map(friend => (
            <FriendCard
              key={friend.id}
              friend={friend}
              handleUpdate={this.props.handleUpdate}
              deleteContact={this.props.deleteContact}
            />
          ))}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    fetchingFriends: state.fetchingFriends,
    addingFriend: state.addingFriend,
  };
};

export default connect(
  mapStateToProps,
  { getFriends, addFriend }
)(withRouter(FriendsList));
