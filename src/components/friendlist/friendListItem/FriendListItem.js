import React from 'react';
import PropTypes from 'prop-types';
import styles from './friendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={styles.item}>
    <span className={isOnline ? styles.status : styles.isActive}></span>
    <img className={styles.avatar} src={avatar} alt={name} width="96" />
    <p className={styles.name}>{name}</p>
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

export default FriendListItem;
