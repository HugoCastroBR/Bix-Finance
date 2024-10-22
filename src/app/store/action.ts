import { PaginatedTransactionsResponse } from '../utils/types';
import { transactionsActions } from './index';

export const TransactionsSetDateFrom = (payload:number) => {
  return transactionsActions.SET_DATE_FROM(payload)
}
export const TransactionsSetDateTo = (payload:number) => {
  return transactionsActions.SET_DATE_TO(payload)
}
export const TransactionsSetTransactionData = (payload:TransactionsStatsResponse) => {
  return transactionsActions.SET_TRANSACTION_DATA(payload)
}