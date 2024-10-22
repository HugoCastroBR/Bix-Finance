import { Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import StyledDataGrid from '../atoms/DataGrid';
import { columns } from '../atoms/TableColumns';
import CustomToolbar from '../molecules/CustomToolbar';
import { GridSlots } from '@mui/x-data-grid';
import {  Transaction } from '@/app/utils/types';
import useStore from '@/app/hooks/useStore';


const paginationModel = { page: 1, pageSize: 10 };

// const getData = async (startDate: number, endDate: number,) => {
//   const response = await fetch(`/api/transactions?startDate=${startDate}&endDate=${endDate}`, {
//     cache: "no-cache",
//   });
//   const data = await response.json();
//   return data as PaginatedTransactionsResponse;
// };


const DataTable = ({

}) => {

  const { states, } = useStore()

  const [isLoading, ] = useState(false)

  const [transactionData,setTransactionData] = useState<Transaction[]>([])

  useEffect(() => {
    console.log('states', states.transactions.transactionData);
    setTransactionData(states.transactions.transactionData.transactions)
  },[states.transactions.dateFrom, states.transactions.dateTo,states.transactions.transactionData.transactions,])




  return (
    <Paper sx={{ height: 640, width: '100%' }}>
      <StyledDataGrid
        onSortModelChange={() => {
          console.log('sort model change');
        }}
        disableColumnFilter
        rows={transactionData && transactionData.map((transaction:Transaction, index:number) => ({
          id: index,
          ...transaction,
        }))}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10, 20, 50, 100]}
        rowCount={states?.transactions?.transactionsData?.total || 0}
        loading={isLoading}
        slots={{
          toolbar: CustomToolbar as GridSlots['toolbar'],
        }}
        slotProps={{
          loadingOverlay: {
            variant: 'linear-progress',
            noRowsVariant: 'skeleton',
          },
        }}
      />
    </Paper>
  );
};

export default DataTable;
