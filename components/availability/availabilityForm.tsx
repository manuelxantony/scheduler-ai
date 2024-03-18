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
          <div className="mt-10">
            <AvailabilityDaySelector />
          </div>
          <button
            type="submit"
            className="bg-black text-white text-sm h-10 w-16 p-2 font-medium rounded-md"
          >
            Save
          </button>
        </form>
      </FormProvider>
      <div className="mt-8" />
    </>
  );
};

export default AvailabilityForm;
