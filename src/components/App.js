import React from 'react';
import Profile from './profile/Profile';
import user from './profile/user.json';
import Statistics from './statistics/Statistics';
import statisticalData from './statistics/statistical-data.json';
import FriendList from './friendlist/FriendList';
import friends from './friendlist/friends.json';
import TransactionHistory from './transactionhistory/TransactionHistory';
import transactions from './transactionhistory/transactions.json';

export const App = () => (
  <>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </>
);
