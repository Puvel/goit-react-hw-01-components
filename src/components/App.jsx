import { Profile } from 'components/profile/Profile';
import { Statistics } from 'components/statistics/Statistics';
import { FriendList } from 'components/friendList/FriendList';
import { TransactionHistory } from 'components/transactionHistory/TransactionHistory';
import user from 'data/user.json';
import statiscic from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';
export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statiscic} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
