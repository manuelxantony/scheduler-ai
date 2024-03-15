'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import AvailabilitySelector2 from '@/components/availabilitySelector2';

import App from './NestedfiledArrayCheck';
// import AvailabilitySelector2 from './availabilitySelector2';

enum WeekDay {
  Sunday = 'Sunday',
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
}

const addDates: any[] = [];

const onSubmit = (data: any) => {
  addDates.push(data);
  console.log(data, '------');
  console.log(addDates);
};

const Availablity2 = () => {
  const { handleSubmit } = useForm();
  return (
    <div className="w-full h-screen">
      <div className="bg-violet-200 mb-11">
        <form onSubmit={handleSubmit(onSubmit)}>
          <AvailabilitySelector2 weekDay={WeekDay.Sunday} onSubmit={onSubmit} />
          <AvailabilitySelector2 weekDay={WeekDay.Monday} onSubmit={onSubmit} />
          <input type="submit" />
        </form>
      </div>
      <div>
        <App />
      </div>
    </div>
  );
};

export default Availablity2;
