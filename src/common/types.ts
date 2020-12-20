export type Account = {
  name: string;
};

export type Transaction = {
  id: string;
  icon: string;
  timestamp: string;
  merchant: string;
  amount: string;
  currency: string;
  account: Account;
};
