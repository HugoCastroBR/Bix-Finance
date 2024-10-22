import React from 'react';
import { GridToolbarContainer, GridToolbarFilterButton } from '@mui/x-data-grid';
import theme from '@/app/theme';

interface CustomToolbarProps {
  setFilterButtonEl: React.Dispatch<React.SetStateAction<HTMLButtonElement | null>>;
}

const CustomToolbar: React.FC<CustomToolbarProps> = ({ setFilterButtonEl }) => (
  <GridToolbarContainer>
    <GridToolbarFilterButton
      ref={setFilterButtonEl}
      slotProps={{
        button: {
          variant: 'contained',
          style: {
            color: theme.palette.secondary.dark,
            backgroundColor: theme.palette.secondary.light,
            marginBottom: 4,
            marginTop: 4,
            boxShadow: '2px 2px 4px 0px rgba(0,0,0,0.1)',
          },
        },
      }}
    />
  </GridToolbarContainer>
);

export default CustomToolbar;
