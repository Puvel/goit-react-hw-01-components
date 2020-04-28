import React from 'react';
import styles from './transactions.module.css'
import TransactionHistoryItem from './transactionHistoryItem/TransactionHistoryItem';

const TransactionHistory = ({ items = [] }) => (
  <table className={styles.transactionHistory}>
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


export default TransactionHistory;
