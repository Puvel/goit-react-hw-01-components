import css from './statisticItem.module.css';
import PropTypes from 'prop-types';

export const StatisticItem = ({ label, percentage, color }) => (
  <li className={css.item} style={{ backgroundColor: color }}>
    <span className={css.label}>{label}</span>
    <span className={css.percentage}>{percentage}%</span>
  </li>
);

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};
