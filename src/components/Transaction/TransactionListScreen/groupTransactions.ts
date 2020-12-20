import { Transaction } from './../../../common/types';

export type TransactionGroup = {
  date: Date;
  transactions: Transaction[];
};

type TransactionMap = {
  [key: string]: Transaction[];
};

const groupTransactions = (transactions: Transaction[]): TransactionGroup[] => {
  const map = transactions.reduce((m: TransactionMap, transaction: Transaction): TransactionMap => {
    const { timestamp } = transaction;
    const time = new Date(timestamp);
    const date = new Date(time.getFullYear(), time.getMonth(), time.getDate());
    const key = date.toISOString();
    if (m[key]) {
      m[key].push(transaction);
    } else {
      m[key] = [transaction];
    }
    return m;
  }, {});

  return Object.keys(map).map((key) => ({
    date: new Date(key),
    transactions: map[key],
  }));
};

export default groupTransactions;
