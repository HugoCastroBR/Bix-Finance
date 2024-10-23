import { Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import StyledDataGrid from '../atoms/DataGrid';
import { columns } from '../atoms/TableColumns';
import CustomToolbar from '../molecules/CustomToolbar';
import { GridSlots } from '@mui/x-data-grid';
import { Transaction } from '@/app/utils/types';
import useStore from '@/app/hooks/useStore';

const paginationModel = { page: 1, pageSize: 15 };

const DataTable = ({

}) => {

  const { states, } = useStore()
  const [isLoading, setIsloading] = useState(true)
  const [transactionData, setTransactionData] = useState<Transaction[]>([])

  useEffect(() => {
    setTransactionData(states.transactions.transactionData.transactions)
  }, [states.transactions.dateFrom, states.transactions.dateTo, states.transactions.transactionData.transactions,])

  useEffect(() => {
    setIsloading(states.transactions.isLoading)
  }, [states.transactions.isLoading])

  const [filterButtonEl, setFilterButtonEl] = useState<HTMLButtonElement | null>(null)


  return (
    <Paper sx={{ height: '70%', width: '100%' }} >
      <StyledDataGrid
        rows={transactionData && transactionData.map((transaction: Transaction, index: number) => ({
          id: index,
          ...transaction,
        }))}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10, 20, 50, 100, 200, 500, 1000]}
        loading={isLoading}
        slots={{
          toolbar: CustomToolbar as GridSlots['toolbar'],
        }}
        slotProps={{
          loadingOverlay: {
            variant: 'linear-progress',
            noRowsVariant: 'skeleton',
          },
          panel: {
            anchorEl: filterButtonEl,
          },
          toolbar: {
            setFilterButtonEl,
          },
          filterPanel: {
            sx(theme) {
              return {
                "& label": {
                  color: theme.palette.secondary.dark,
                },
                "& .MuiInputLabel-standard": {
                  color: theme.palette.secondary.dark,
                },
              };
            },
          },
        }}
      />
    </Paper>
  );
};

export default DataTable;
