import Big from 'big.js';
import { Transaction } from './../../../common/types';

const sumTransactions = (transactions: Transaction[]): string => {
  return transactions.reduce((s: Big, t: Transaction) => {
    return s.add(new Big(t.amount));
  }, new Big(0)).toString();
}

export default sumTransactions;
