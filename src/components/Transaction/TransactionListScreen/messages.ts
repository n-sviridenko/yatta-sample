import { defineMessages } from "react-intl";

export default defineMessages({
  appBarTitle: {
    id: 'Transaction.TransactionListScreen.appBarTitle',
    defaultMessage: 'Weekly Transactions',
  },
  // doesn't work on Android, even with polyfill, looks like a breaking change
  // sectionTitle: {
  //   id: 'Transaction.TransactionListScreen.sectionTitle',
  //   defaultMessage: '{date}   -   {count} {count, plural, =1 {Transaction} other {Transactions}}',
  // },
  sectionTitle: {
    id: 'Transaction.TransactionListScreen.sectionTitle',
    defaultMessage: '{date}   -   {count} {transaction}',
  },
  transactionSingular: {
    id: 'Transaction.TransactionListScreen.transactionSingular',
    defaultMessage: 'Transaction',
  },
  transactionPlural: {
    id: 'Transaction.TransactionListScreen.transactionPlural',
    defaultMessage: 'Transactions',
  },
});
