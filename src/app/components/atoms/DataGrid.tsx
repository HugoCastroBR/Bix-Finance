import { styled } from 'styled-components';
import { DataGrid } from '@mui/x-data-grid';
import theme from '@/app/theme';

const StyledDataGrid = styled(DataGrid)({
  backgroundColor: theme.palette.secondary.light,
  '& .MuiDataGrid-columnHeader': {
    backgroundColor: theme.palette.secondary.light,
  },
  "& label": {
    color: theme.palette.secondary.dark,
  },
  "& .MuiInputLabel-standard": {
    color: theme.palette.secondary.dark,
  },
  color: 'var(--foreground)',
});

export default StyledDataGrid;
