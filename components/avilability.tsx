'use client';

import { useState } from 'react';
import {
  useForm,
  useFieldArray,
  FormProvider,
  useFormContext,
} from 'react-hook-form';

import AvailabilitySelector from '@/components/availabilitySelector';

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

type DateInputs = {
  dates: {
    weekDay: string;
    startTime: string;
    endTime: string;
  }[];
};

const Availablity = () => {
  const methods = useForm<DateInputs>({
    defaultValues: {
      dates: [{ weekDay: 'Sunday', startTime: '9.00 am', endTime: '7.00 pm' }],
    },
  });
  const { register, handleSubmit, control } = methods;

  const { fields, append, remove } = useFieldArray({
    name: 'dates',
    control,
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full h-screen">
        <div className="bg-violet-200 mb-11">
          {fields.map((field, index) => {
            return <div key={field.id}></div>;
          })}
          <AvailabilitySelector weekDay={WeekDay.Sunday} />
          /
          <AvailabilitySelector weekDay={WeekDay.Monday} />
        </div>
        <button type="submit">submit</button>
      </form>
    </FormProvider>
  );
};

export default Availablity;
