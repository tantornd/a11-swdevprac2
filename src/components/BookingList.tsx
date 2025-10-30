'use client';

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store';
import { removeBooking } from '@/redux/features/bookSlice';
import { Paper, Button, Typography, Box } from '@mui/material';

export default function BookingList() {
  const bookItems = useSelector((state: RootState) => state.bookSlice.bookItems);
  const dispatch = useDispatch<AppDispatch>();

  const handleRemoveBooking = (item: any) => {
    dispatch(removeBooking(item));
  };

  if (bookItems.length === 0) {
    return (
      <Box className="flex items-center justify-center w-full h-[50vh]">
        <Typography variant="h6" className="text-gray-500 dark:text-gray-400">
          No Venue Booking
        </Typography>
      </Box>
    );
  }

  return (
    <div className="flex flex-col items-center w-full space-y-6">
      {bookItems.map((item, index) => (
        <Paper
          key={index}
          elevation={3}
          className="w-full max-w-5xl p-6 bg-white dark:bg-neutral-900 rounded-lg shadow-md text-left"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <Typography variant="subtitle2" className="text-gray-500 dark:text-gray-400">
                Name-Lastname
              </Typography>
              <Typography variant="body1" className="font-medium">
                {item.nameLastname}
              </Typography>
            </div>
            <div>
              <Typography variant="subtitle2" className="text-gray-500 dark:text-gray-400">
                Contact Number
              </Typography>
              <Typography variant="body1" className="font-medium">
                {item.tel}
              </Typography>
            </div>
            <div>
              <Typography variant="subtitle2" className="text-gray-500 dark:text-gray-400">
                Venue
              </Typography>
              <Typography variant="body1" className="font-medium">
                {item.venue}
              </Typography>
            </div>
            <div>
              <Typography variant="subtitle2" className="text-gray-500 dark:text-gray-400">
                Event Date
              </Typography>
              <Typography variant="body1" className="font-medium">
                {item.bookDate}
              </Typography>
            </div>
          </div>
          <div className="text-center">
            <Button
              variant="outlined"
              color="error"
              onClick={() => handleRemoveBooking(item)}
            >
              Cancel Booking
            </Button>
          </div>
        </Paper>
      ))}
    </div>
  );
}
