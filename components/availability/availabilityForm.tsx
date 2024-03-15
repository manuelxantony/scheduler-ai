'use client';

import { FormProvider, useForm } from 'react-hook-form';

import AvailabilityDaySelector from '@/components/availability/availabilityDaySelector';
import { Availability } from '@/app/lib/definitions';
import { defaultAvailability } from '@/app/lib/data';

const AvailabilityForm = () => {
  const methods = useForm<Availability>({
    defaultValues: defaultAvailability,
  });

  const { handleSubmit } = methods;

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
