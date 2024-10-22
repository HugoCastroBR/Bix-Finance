import { GridColDef } from '@mui/x-data-grid';

export const columns: GridColDef[] = [
  {
    field: 'date',
    headerName: 'Date',
    type: 'dateTime',
    valueGetter: (value) => new Date(value),
    minWidth: 120,
    flex: 2,
  },
  {
    field: 'amount',
    headerName: 'Amount',
    valueGetter: (value) => {
      const newValue = parseFloat(value) / 100;
      return newValue.toFixed(2);
    },
    minWidth: 120,
    flex: 1,
  },
  {
    field: 'transaction_type',
    headerName: 'Transaction Type',
    flex: 1,
    minWidth: 120,
  },
  {
    field: 'currency',
    headerName: 'Currency',
    flex: 1,
    minWidth: 120,
  },
  {
    field: 'account',
    headerName: 'Account',
    flex: 1,
    minWidth: 120,
  },
  {
    field: 'industry',
    headerName: 'Industry',
    flex: 1,
    minWidth: 120,
  },
  {
    field: 'state',
    headerName: 'State',
    flex: 1,
    minWidth: 120,
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
