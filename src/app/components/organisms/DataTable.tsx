import { Paper } from '@mui/material';
import React, { useState } from 'react';
import StyledDataGrid from '../atoms/DataGrid';
import { columns } from '../atoms/TableColumns';
import CustomToolbar from '../molecules/CustomToolbar';
import { GridSlots } from '@mui/x-data-grid';
import { mockTransactions } from '../atoms/mockTransations';


const paginationModel = { page: 0, pageSize: 5 };

const DataTable = () => {
  const [filterButtonEl, setFilterButtonEl] = useState<HTMLButtonElement | null>(null);

  
  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <StyledDataGrid
        onFilterModelChange={(model) => console.log(model)}
        rows={mockTransactions.map((transaction, index) => ({
          id: index,
          ...transaction,
        }))}
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
