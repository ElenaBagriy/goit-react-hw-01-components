import PropTypes from 'prop-types';
import { UserWrapper, UserDescription, Avatar, UserName, UserTag, UserLocation, Stats, Item, Label, Quantity } from './Profile.styled';

function Profile(props) {
  const { username, tag, location, avatar, stats: { followers, views, likes } } = props;
  
  return (<UserWrapper>
  <UserDescription>
    <Avatar
      src={avatar}
      alt="User avatar"
    />
    <UserName>{username}</UserName>
    <UserTag>@{tag}</UserTag>
    <UserLocation>{location}</UserLocation>
  </UserDescription>
  <Stats>
    <Item>
      <Label>Followers</Label>
      <Quantity>{followers}</Quantity>
    </Item>
    <Item>
      <Label>Views</Label>
      <Quantity>{views}</Quantity>
    </Item>
    <Item>
      <Label>Likes</Label>
      <Quantity>{likes}</Quantity>
    </Item>
  </Stats>
  </UserWrapper>);
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
};

export default Profile;