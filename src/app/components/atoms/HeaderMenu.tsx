import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import DateRangerPicker from './DateRangerPicker';
import { DateRange } from 'react-day-picker';
import { Box, Paper, Typography } from '@mui/material';
import Icon from "@mdi/react"
import { mdiCalendarRange, mdiChartBoxMultipleOutline, mdiTableMultiple } from '@mdi/js';
import theme from "@/app/theme";
import useStore from '@/app/hooks/useStore';
import { TransactionsSetDateFrom, TransactionsSetDateTo } from '@/app/store/action';
import { useRouter } from 'next/navigation';


export default function HeaderMenu({
  dashboard,
}: {
  dashboard?: boolean
}) {
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
  const router = useRouter()

  const navigateTo = (path: string) => {
    router.push(path)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'start',
        gap: 2,
        width: '100%',
        margin: 'auto',
        marginTop: 2,
      }}
    >
      <Paper
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 220,
          padding: 1
        }}
      >
        <Button
          id="basic-button"
          onClick={() => {
            navigateTo(
              dashboard
                ? '/dashboard/stats'
                : '/dashboard'
            )
          }}
          color='secondary'
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Icon
            path={
              dashboard
                ? mdiChartBoxMultipleOutline
                : mdiTableMultiple
            }
            size={1}
            color={theme.palette.secondary.main}
          />
          <Typography
          >
            {dashboard ? 'Stats' : 'Dashboard'}
          </Typography>
        </Button>
      </Paper>
      <Paper
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 220,
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
              if (date.from && date.to) {
                dispatch(TransactionsSetDateFrom(date.from.getTime()))
                dispatch(TransactionsSetDateTo(date.to.getTime()))
              }
            }}
          />
        </Menu>
      </Paper>
    </Box>
  );
}

