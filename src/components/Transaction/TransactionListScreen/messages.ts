import { defineMessages } from "react-intl";

export default defineMessages({
  appBarTitle: {
    id: 'Transaction.TransactionListScreen.appBarTitle',
    defaultMessage: 'Weekly Transactions',
  },
  sectionTitle: {
    id: 'Transaction.TransactionListScreen.sectionTitle',
    defaultMessage: '{date}   -   {count} {count, plural, =1 {Transaction} other {Transactions}}',
  },
});
