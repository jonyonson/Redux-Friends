import React from 'react';
import FriendCard from '../FriendCard/FriendCard';
import { connect } from 'react-redux';
import { getFriends } from '../../actions';
import Loader from 'react-loader-spinner';
import './FriendsList.css';
import TopBar from '../TopBar/TopBar';

class FriendsList extends React.Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return this.props.fetchingFriends ? (
      <>
        <TopBar />
        <div className="FriendsList__Loading">
          <Loader type="Grid" color="#342E37" />
        </div>
      </>
    ) : (
      <>
        <TopBar />

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
  };
};

export default connect(
  mapStateToProps,
  { getFriends }
)(FriendsList);
