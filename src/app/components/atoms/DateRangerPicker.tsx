import theme from "@/app/theme";
import { Button, Paper } from "@mui/material";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

function getTodayAndSixMonthsAgo(): { todayEpoch: number; sixMonthsAgoEpoch: number } {
  const today = new Date();
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
  const todayEpoch = today.getTime();
  const sixMonthsAgoEpoch = sixMonthsAgo.getTime();
  return { todayEpoch, sixMonthsAgoEpoch };
}

interface DateRangePickerProps {
  onChange: (dateRange: DateRange) => void;
}
export default function DateRangePicker({
  onChange,
}:DateRangePickerProps) {
  

  const { todayEpoch, sixMonthsAgoEpoch } = getTodayAndSixMonthsAgo();
  
  const [selected, setSelected] = useState<DateRange>(
    { 
      from: new Date(sixMonthsAgoEpoch),
      to: new Date(todayEpoch), 
    }
  );
  const handlerDataChange = (dateRange: DateRange) => {
    setSelected(dateRange);
  };

  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}
    >
     <DayPicker
      mode="range"
      onSelect={(dateRange) => {
        if (dateRange) {
          handlerDataChange(dateRange);
        }
      }}
      selected={selected}
    />
      <Button
        onClick={() => {
          onChange(selected);
        }}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '80%',
          backgroundColor: theme.palette.primary.dark,
        }}
      >
        Ok
      </Button>
    </Paper>
  );
}
