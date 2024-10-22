import { Transaction } from '@/app/utils/types';

export const mockTransactions: Transaction[] = [
  {
    date: 1627814400000,
    amount: "12000",
    transaction_type: "deposit",
    currency: "USD",
    account: "Company A",
    industry: "Technology",
    state: "CA",
  },
  {
    date: 1630454400000,
    amount: "4500",
    transaction_type: "withdraw",
    currency: "USD",
    account: "Company B",
    industry: "Healthcare",
    state: "TX",
  },
  
];
