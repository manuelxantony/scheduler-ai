'use client';

import { FormProvider, useForm } from 'react-hook-form';

import AvailabilityDaySelector from '@/components/availability/availabilityDaySelector';

import { Availability } from '@/app/lib/definitions';
import TimeRangeSelector from './timeRangeSelector';
import SelectTry from '../selecttry';

const defaultAvailability: Availability = {
  availability: [
    {
      day: 'Sunday',
      timeRanges: [{ startTime: '10.00 am', endTime: '6.00 pm' }],
    },
    {
      day: 'Monday',
      timeRanges: [{ startTime: '10.00 am', endTime: '6.00 pm' }],
    },
    {
      day: 'Tuesday',
      timeRanges: [{ startTime: '10.00 am', endTime: '6.00 pm' }],
    },
    {
      day: 'Wednesday',
      timeRanges: [{ startTime: '10.00 am', endTime: '6.00 pm' }],
    },
    {
      day: 'Thursday',
      timeRanges: [{ startTime: '10.00 am', endTime: '6.00 pm' }],
    },
    {
      day: 'Friday',
      timeRanges: [{ startTime: '10.00 am', endTime: '6.00 pm' }],
    },
    {
      day: 'Saturday',
      timeRanges: [{ startTime: '10.00 am', endTime: '6.00 pm' }],
    },
  ],
};

const AvailabilityForm = () => {
  const methods = useForm<Availability>({
    defaultValues: defaultAvailability,
  });

  const { control, register, handleSubmit, getValues, reset, setValue } =
    methods;

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={onSubmit}>
          <h1 className="font-bold text-xl">Availability Selector</h1>
          <AvailabilityDaySelector />
          <input
            type="submit"
            className="bg-blue-200 text-sm h-10 w-14 font-bold"
          />
        </form>
      </FormProvider>
      <div className="mt-8" />
      <TimeRangeSelector />
    </>
  );
};

export default AvailabilityForm;
