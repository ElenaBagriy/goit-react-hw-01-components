import PropTypes from 'prop-types';
import FriendListItem from "./FriendListItem";
import { FriendsList } from './FriendList.styled';

function FriendList({ friends }) {
  return (<FriendsList>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}/>
    ))}
  </FriendsList>)
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({id: PropTypes.number.isRequired})
  )
};

export default FriendList;