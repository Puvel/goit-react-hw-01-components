import React from 'react';
import PropTypes from 'prop-types';
import styles from './statistics.module.css';
import StatisticItem from './statisticItem/StatisticItem';

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>
        {stats.map(stat => (
          <StatisticItem key={stat.id} {...stat} />
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
};

export default Statistics;
