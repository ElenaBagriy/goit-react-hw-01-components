import PropTypes from 'prop-types';
import { Friend, Status, Avatar, Name, OnlineStatus } from './FriendListItem.styled';

function FriendListItem({ avatar, name, isOnline }) {
  
  return (<Friend>
    <Status online={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
        <Name>{name}</Name>
    </Friend>)
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;