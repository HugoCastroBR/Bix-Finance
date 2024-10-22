export type Transaction = {
  id?: string | number;
  date: number; 
  amount: string; 
  transaction_type: 'deposit' | 'withdraw'; 
  currency: string; 
  account: string; 
  industry: string; 
  state: string; 
};