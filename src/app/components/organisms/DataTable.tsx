import { Paper } from '@mui/material';
import React, { useState } from 'react';
import StyledDataGrid from '../atoms/DataGrid';
import { columns } from '../atoms/TableColumns';
import CustomToolbar from '../molecules/CustomToolbar';
import { GridSlots } from '@mui/x-data-grid';
import { PaginatedTransactionsResponse } from '@/app/utils/types';


const paginationModel = { page: 0, pageSize: 10 };

interface IDataTableProps extends PaginatedTransactionsResponse{
  isLoading: boolean
}

const DataTable = ({
  transactions,
  page,
  pageSize,
  total,
  isLoading
}:IDataTableProps) => {
  const [filterButtonEl, setFilterButtonEl] = useState<HTMLButtonElement | null>(null);

  
  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <StyledDataGrid
        onFilterModelChange={(model) => console.log(model)}
        rows={transactions.map((transaction, index) => ({
          id: index,
          ...transaction,
        }))}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
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
