import PropTypes from 'prop-types';
import css from './statistics.module.css';
import { StatisticItem } from 'components/statisticItem/StatisticItem';
import { generateColor } from 'helpers/colorGenerator';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(stat => (
          <StatisticItem key={stat.id} {...stat} color={generateColor()} />
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
