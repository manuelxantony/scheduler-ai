'use client';

import { FormProvider, useForm } from 'react-hook-form';

import AvailabilityDaySelector from '@/components/availability/availabilityDaySelector';
import { Availability } from '@/app/lib/definitions';
import { defaultStartTime, defaultEndTime } from '@/app/lib/day';

const defaultAvailability: Availability = {
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
    </>
  );
};

export default AvailabilityForm;
