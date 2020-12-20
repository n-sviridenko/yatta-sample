import React from 'react';
import { IntlProvider } from 'react-intl';
import translations from './src/common/translations';
import { Transaction } from './src/common/types';
import TransactionListScreen from './src/components/Transaction/TransactionListScreen';

const testData: Transaction[] = [
  {
    id: 'xxx1',
    icon: 'https://placekitten.com/20/20',
    timestamp: '2020-01-01T12:00:00Z',
    amount: '100.00',
    currency: 'EUR',
    merchant: 'Test Merchant 1',
    account: {
      name: 'TestBank',
    },
  },
  {
    id: 'xxx2',
    icon: 'https://placekitten.com/20/20',
    timestamp: '2020-01-02T12:00:00Z',
    amount: '100.00',
    currency: 'EUR',
    merchant: 'Test Merchant 2',
    account: {
      name: 'TestBank',
    },
  },
  {
    id: 'xxx3',
    icon: 'https://placekitten.com/20/20',
    timestamp: '2020-01-02T14:00:00Z',
    amount: '1.99',
    currency: 'EUR',
    merchant: 'Test Merchant 3',
    account: {
      name: 'TestBank',
    },
  },
  {
    id: 'xxx4',
    icon: 'https://placekitten.com/20/20',
    timestamp: '2020-01-03T12:00:00Z',
    amount: '100.00',
    currency: 'EUR',
    merchant: 'Test Merchant 4',
    account: {
      name: 'TestBank',
    },
  },
  {
    id: 'xxx5',
    icon: 'https://placekitten.com/20/20',
    timestamp: '2020-01-04T12:00:00Z',
    amount: '100.00',
    currency: 'EUR',
    merchant: 'Test Merchant 5',
    account: {
      name: 'TestBank',
    },
  },
  {
    id: 'xxx1',
    icon: 'https://placekitten.com/20/20',
    timestamp: '2019-12-01T12:00:00Z',
    amount: '100.00',
    currency: 'EUR',
    merchant: 'Test Merchant 1',
    account: {
      name: 'TestBank',
    },
  },
  {
    id: 'xxx2',
    icon: 'https://placekitten.com/20/20',
    timestamp: '2019-12-02T12:00:00Z',
    amount: '100.00',
    currency: 'EUR',
    merchant: 'Test Merchant 2',
    account: {
      name: 'TestBank',
    },
  },
  {
    id: 'xxx3',
    icon: 'https://placekitten.com/20/20',
    timestamp: '2019-12-02T14:00:00Z',
    amount: '1.99',
    currency: 'EUR',
    merchant: 'Test Merchant 3',
    account: {
      name: 'TestBank',
    },
  },
  {
    id: 'xxx4',
    icon: 'https://placekitten.com/20/20',
    timestamp: '2019-12-03T12:00:00Z',
    amount: '100.00',
    currency: 'EUR',
    merchant: 'Test Merchant 4',
    account: {
      name: 'TestBank',
    },
  },
  {
    id: 'xxx5',
    icon: 'https://placekitten.com/20/20',
    timestamp: '2019-12-04T12:00:00Z',
    amount: '100.00',
    currency: 'EUR',
    merchant: 'Test Merchant 5',
    account: {
      name: 'TestBank',
    },
  },
];


const App = () => {
  return (
    <IntlProvider
      key="en"
      locale="en"
      messages={translations.en}
    >
      <TransactionListScreen transactions={testData} />
    </IntlProvider>
  );
};

export default App;
