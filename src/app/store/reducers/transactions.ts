
import { TransactionsStatsResponse } from "@/app/utils/types";
import { createSlice } from "@reduxjs/toolkit";

type ITransactionsSlice = {
  isLoading: boolean;
  dateFrom: number;
  dateTo: number;
  transactionData: TransactionsStatsResponse
}

export const TransactionsSlice = createSlice({
	name: "TransactionsSlice",
	initialState: {
    isLoading: true,
    dateFrom: 0,
    dateTo: 0,
    transactionData: {

    }
	} as ITransactionsSlice,
	reducers: {
    SET_DATE_FROM(state,{payload}:{payload:number}){
      state.dateFrom = payload
    },
    SET_DATE_TO(state,{payload}:{payload:number}){
      state.dateTo = payload
    },
    SET_TRANSACTION_DATA(state,{payload}:{payload:TransactionsStatsResponse}){
      state.transactionData = payload
    },
    SET_IS_LOADING(state,{payload}:{payload:boolean}){
      state.isLoading = payload
    }
	},
});