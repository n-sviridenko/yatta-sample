import React from 'react';
import { FormattedNumber } from 'react-intl';
import { List, Subheading } from 'react-native-paper';
import { Transaction } from '../../../common/types';
import styles from './styles';

interface TransactionListItemProps {
  transaction: Transaction;
};

const TransactionListItem: React.FC<TransactionListItemProps> = ({ transaction }) => {
  const { merchant, icon, amount, account, currency } = transaction;
  return (
    <List.Item
      title={merchant}
      description={account.name}
      left={props => <List.Icon {...props} icon={{ uri: icon }} />}
      right={() => (
        <Subheading style={styles.amount}>
          <FormattedNumber value={amount as any} currency={currency} style="currency" />
        </Subheading>
      )}
    />
  )
};

export default TransactionListItem;
