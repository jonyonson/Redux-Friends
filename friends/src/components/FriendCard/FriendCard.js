import React from 'react';
import './FriendCard.css';
import { MdDeleteForever, MdEdit } from 'react-icons/md';

class FriendCard extends React.Component {
  handleUpdate = e => {
    this.props.handleUpdate(this.props.friend);
  };

  deleteFriend = () => {
    // this.props.deleteFriend()
  };

  render() {
    return (
      <div className="FriendCard">
        <div className="FriendCard__name">{this.props.friend.name}</div>
        <div className="FriendCard__email">{this.props.friend.email}</div>
        <div className="FriendCard__phone">{this.props.friend.phone}</div>
        {/* <div className="FriendCard__age">age: {this.props.friend.age}</div> */}
        <div className="FriendCard__icons">
          <MdEdit className="edit-icon" size="20" onClick={this.handleUpdate} />
          <MdDeleteForever
            className="delete-icon"
            size="22"
            onClick={this.deleteFriend(this.props.friend.id)}
          />
        </div>
      </div>
    );
  }
}

export default FriendCard;
