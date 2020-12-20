import React from 'react';
import { useIntl } from 'react-intl';
import { SafeAreaView, VirtualizedList } from 'react-native';
import { Appbar, List } from 'react-native-paper';
import { Transaction } from '../../../common/types';
import TransactionListItem from '../TransactionListItem';
import WeeklyTotalSnackbar from '../WeeklyTotalSnackbar';
import groupTransactions, { TransactionGroup } from './groupTransactions';
import messages from './messages';
import styles from './styles';

interface TransactionListScreenProps {
  transactions: Transaction[];
};

const TransactionListScreen: React.FC<TransactionListScreenProps> = ({ transactions: allTransactions }) => {
  const groups = groupTransactions(allTransactions);
  const intl = useIntl();

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title={intl.formatMessage(messages.appBarTitle)} />
      </Appbar.Header>
      <SafeAreaView style={styles.root}>
        <VirtualizedList
          data={groups}
          initialNumToRender={4}
          renderItem={({ item: group }: { item: TransactionGroup }) => {
            const { date, transactions } = group;
            const dateFmt = intl.formatDate(date, { weekday: 'long', day: 'numeric', month: 'long' });
            const transactionFmt = intl.formatMessage(transactions.length > 1 ? messages.transactionPlural : messages.transactionSingular)
            const titleFmt = intl.formatMessage(messages.sectionTitle, { date: dateFmt, count: transactions.length, transaction: transactionFmt });
            return (
              <List.Section
                title={titleFmt}
                key={date.toISOString()}
              >
                {transactions.map(t => <TransactionListItem key={t.id} transaction={t} />)}
              </List.Section>
            );
          }}
          keyExtractor={item => item.date.toISOString()}
          getItemCount={items => items.length}
          getItem={(items, index) => items[index]}
        />
        <WeeklyTotalSnackbar transactions={allTransactions} />
      </SafeAreaView>
    </>
  )
};

export default TransactionListScreen;
