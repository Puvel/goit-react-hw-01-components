import PropTypes from 'prop-types';
import { FriendListItem } from 'components/friendListItem/friendListItem';
import css from './friendList.module.css';

export const FriendList = ({ friends = [] }) => (
  <ul className={css.friendList}>
    {friends.map(friend => (
      <FriendListItem key={friend.id} {...friend} />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.array,
};
