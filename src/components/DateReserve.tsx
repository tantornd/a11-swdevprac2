'use client';

import { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';

export default function DateReserve() {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Event Date"
        value={selectedDate}
        onChange={(newValue) => {
          setSelectedDate(newValue);
        }}
        sx={{ width: '100%' }}
      />
    </LocalizationProvider>
  );
}