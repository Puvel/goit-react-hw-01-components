import PropTypes from 'prop-types';
import css from './friendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={css.item}>
    <span className={isOnline ? css.status : css.isActive}></span>
    <img className={css.avatar} src={avatar} alt={name} width="96" />
    <p className={css.name}>{name}</p>
  </li>
);

FriendListItem.defaultProps = {
  avatar:
    'https://ih1.redbubble.net/image.188518724.7199/flat,128x128,075,t-pad,128x128,f8f8f8.jpg',
  isOnline: false,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};
