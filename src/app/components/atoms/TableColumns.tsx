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
    valueGetter: (value,row) => {
      const newValue = parseFloat(value) / 100;
      const currency = row.currency; 
      return formatCurrency(newValue, currency);
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
];

function formatCurrency(value: number, currency: string): string {
  const options: Intl.NumberFormatOptions = {
    style: 'currency',
    currency: currency === 'brl' ? 'BRL' : 'USD', 
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  const formatter = new Intl.NumberFormat('pt-BR', options); 
  return formatter.format(value);
}
