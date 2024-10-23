import { configureStore } from "@reduxjs/toolkit"
import { TransactionsSlice } from "./reducers/transactions";

const store = configureStore({
  reducer:{
    transactions:TransactionsSlice.reducer,
  }
})

export default store;
export type RootState = ReturnType<typeof store.getState>

export const transactionsActions = TransactionsSlice.actions
