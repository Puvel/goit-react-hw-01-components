import PropTypes from 'prop-types';
import css from './transactionHistory.module.css';
import { TransactionHistoryItem } from 'components/transactionHistoryItem/TransactionHistoryItem';

export const TransactionHistory = ({ items = [] }) => (
  <table className={css.transactionHistory}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(item => (
        <TransactionHistoryItem key={item.id} {...item} />
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.array,
};
