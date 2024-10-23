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

export type PaginatedTransactionsResponse = {
  page: number;              
  pageSize: number;         
  total: number;            
  transactions: Transaction[]; 
};

export type TransactionsStatsResponse = {
  transactions: Transaction[]; 
  amountTotal: number;           // Soma total dos valores de todas as transações
  withdrawTotal: number;         // Soma total de todos os saques
  depositTotal: number;          // Soma total de todos os depósitos
  pendingTransactions: number;   // Soma total de transações pendentes
  total: number;                 // Total de transações número de transações processadas
};

export type RegisteredUser = {
  name: string;
  email: string;
  password: string;
};
