import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import DateRangerPicker from './DateRangerPicker';
import { DateRange } from 'react-day-picker';
import { Paper, Typography } from '@mui/material';
import Icon from "@mdi/react"
import { mdiCalendarRange } from '@mdi/js';
import theme from "@/app/theme";
import useStore from '@/app/hooks/useStore';
import { TransactionsSetDateFrom, TransactionsSetDateTo } from '@/app/store/action';


export default function HeaderMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [DataRange, setDataRange] = React.useState<DateRange>()
  
  const { dispatch } = useStore()

  return (
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 250,
        padding: 1
      }}
    >
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color='secondary'
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Icon
          path={mdiCalendarRange}
          size={1}
          color={theme.palette.secondary.main}
        />
        <Typography>
          {DataRange ? `${DataRange.from?.toLocaleDateString() || ''} - ${DataRange.to?.toLocaleDateString() || ''}` : 'Select Date Range'}
        </Typography>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <DateRangerPicker
          onChange={(date) => {
            setDataRange(date);
            handleClose();
            if(date.from && date.to) {
              dispatch(TransactionsSetDateFrom(date.from.getTime()))
              dispatch(TransactionsSetDateTo(date.to.getTime()))
            }
          }}
        />
      </Menu>
    </Paper>
  );
}

