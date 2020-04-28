import React from 'react';
import styles from './statisticsItem.module.css';
import PropTypes from 'prop-types';
import { generateColor } from '../../ui/generateColor';

const StatisticItem = ({ label, percentage }) => (
  <li className={styles.item} style={{ backgroundColor: generateColor() }}>
    <span className={styles.label}>{label}</span>
    <span className={styles.percentage}>{percentage}%</span>
  </li>
);

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticItem;
