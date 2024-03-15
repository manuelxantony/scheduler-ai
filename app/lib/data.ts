import { Availability } from '@/app/lib/definitions';
import { defaultStartTime, defaultEndTime } from '@/app/lib/day';

export const defaultAvailability: Availability = {
  availability: [
    {
      day: 'Sunday',
      timeRanges: [{ startTime: defaultStartTime, endTime: defaultEndTime }],
    },
    {
      day: 'Monday',
      timeRanges: [{ startTime: defaultStartTime, endTime: defaultEndTime }],
    },
    {
      day: 'Tuesday',
      timeRanges: [{ startTime: defaultStartTime, endTime: defaultEndTime }],
    },
    {
      day: 'Wednesday',
      timeRanges: [{ startTime: defaultStartTime, endTime: defaultEndTime }],
    },
    {
      day: 'Thursday',
      timeRanges: [{ startTime: defaultStartTime, endTime: defaultEndTime }],
    },
    {
      day: 'Friday',
      timeRanges: [{ startTime: defaultStartTime, endTime: defaultEndTime }],
    },
    {
      day: 'Saturday',
      timeRanges: [{ startTime: defaultStartTime, endTime: defaultEndTime }],
    },
  ],
};
