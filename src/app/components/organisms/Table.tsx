import * as React from 'react';
import { DataGrid, GridColDef, GridSlots, GridToolbarContainer, GridToolbarFilterButton } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { styled } from 'styled-components';
import theme from '@/app/theme';
import { Transaction } from '@/app/utils/types';

const columns: GridColDef[] = [
  {
    field: 'date',
    headerName: 'Date',
    type: 'dateTime',
    valueGetter: (value) => new Date(value),
    flex: 2,
  },
  {
    field: 'amount',
    headerName: 'Amount',
    valueGetter: (value) => {
      const newValue = parseFloat(value) / 100;
      return newValue.toFixed(2);
    },
    flex: 1,
  },
  {
    field: 'transaction_type',
    headerName: 'Transaction Type',
    flex: 1,
  },

  {
    field: 'currency',
    headerName: 'Currency',
    flex: 1,

  },
  {
    field: 'account',
    headerName: 'Account',
    flex: 1,

  },
  {
    field: 'industry',
    headerName: 'Industry',
    flex: 1,

  },
  {
    field: 'state',
    headerName: 'State',
    flex: 1,

  },
  {
    field: 'transactionDetails',
    headerName: 'Transaction Details',
    description: 'This column combines the type and amount of the transaction.',
    sortable: false,
    valueGetter: (_, row) => `${row.transaction_type} of ${parseFloat(row.amount) / 100} ${row.currency}`,
    flex: 2,

  },
];



export const mockTransactions: Transaction[] = [
  {
    date: 1627814400000, // 01 August 2021
    amount: "12000", // 120.00
    transaction_type: "deposit",
    currency: "USD",
    account: "Company A",
    industry: "Technology",
    state: "CA",
  },
  {
    date: 1630454400000, // 01 September 2021
    amount: "4500", // 45.00
    transaction_type: "withdraw",
    currency: "USD",
    account: "Company B",
    industry: "Healthcare",
    state: "TX",
  },
  {
    date: 1633046400000, // 01 October 2021
    amount: "8500", // 85.00
    transaction_type: "deposit",
    currency: "EUR",
    account: "Company C",
    industry: "Finance",
    state: "NY",
  },
  {
    date: 1635724800000, // 01 November 2021
    amount: "2200", // 22.00
    transaction_type: "withdraw",
    currency: "GBP",
    account: "Company D",
    industry: "Manufacturing",
    state: "FL",
  },
  {
    date: 1638316800000, // 01 December 2021
    amount: "6700", // 67.00
    transaction_type: "deposit",
    currency: "USD",
    account: "Company E",
    industry: "Retail",
    state: "NV",
  },
  {
    date: 1640995200000, // 01 January 2022
    amount: "3000", // 30.00
    transaction_type: "withdraw",
    currency: "USD",
    account: "Company F",
    industry: "Technology",
    state: "CA",
  },
  {
    date: 1643673600000, // 01 February 2022
    amount: "5400", // 54.00
    transaction_type: "deposit",
    currency: "EUR",
    account: "Company G",
    industry: "Finance",
    state: "IL",
  },
  {
    date: 1646092800000, // 01 March 2022
    amount: "9100", // 91.00
    transaction_type: "withdraw",
    currency: "USD",
    account: "Company H",
    industry: "Healthcare",
    state: "TX",
  },
  {
    date: 1648771200000, // 01 April 2022
    amount: "12300", // 123.00
    transaction_type: "deposit",
    currency: "GBP",
    account: "Company I",
    industry: "Retail",
    state: "WA",
  },
  {
    date: 1651363200000, // 01 May 2022
    amount: "7600", // 76.00
    transaction_type: "withdraw",
    currency: "USD",
    account: "Company J",
    industry: "Manufacturing",
    state: "NY",
  },
];

const StyledDataGrid = styled(DataGrid)({
  backgroundColor: theme.palette.secondary.light,
  '& .MuiDataGrid-columnHeader': {
    backgroundColor: theme.palette.secondary.light,
  },
  color: 'var(--foreground)',
})

const paginationModel = { page: 0, pageSize: 5 };

interface CustomToolbarProps {
  setFilterButtonEl: React.Dispatch<React.SetStateAction<HTMLButtonElement | null>>;
}

function CustomToolbar({ setFilterButtonEl }: CustomToolbarProps) {
  return (
    <GridToolbarContainer>
      <GridToolbarFilterButton 
      ref={setFilterButtonEl} 
      slotProps={{
        button: {
          variant: 'contained',
          color: 'secondary',
      }}
      }
      />
    </GridToolbarContainer>
  );
}

export default function DataTable() {

  const [filterButtonEl, setFilterButtonEl] =
    React.useState<HTMLButtonElement | null>(null);

  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <StyledDataGrid
        onFilterModelChange={(model) => console.log(model)}
        rows={
          mockTransactions.map((transaction, index) => ({
            id: index,
            ...transaction,
          }))
        }
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        slots={{
          toolbar: CustomToolbar as GridSlots['toolbar'],
        }}
        slotProps={{
          panel: {
            anchorEl: filterButtonEl,
          },
          toolbar: {
            setFilterButtonEl,
          },
        }}
      />
    </Paper>
  );
}