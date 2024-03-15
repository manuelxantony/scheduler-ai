'use client';

import { useFormContext, useFieldArray } from 'react-hook-form';

import { Availability } from '@/app/lib/definitions';
import AvailabilityTimeSelector from '@/components/availability/availabilityTimeSelector';

const AvailabilityDaySelector = () => {
  const { control, register, setValue, getValues } =
    useFormContext<Availability>();

  const { fields, append, remove } = useFieldArray<Availability>({
    name: 'availability',
    control,
  });

  return (
    <div>
      {fields.map((field, index) => {
        return (
          <div key={field.id}>
            {/* day selector here */}

            {field.day}
            <div>
              <AvailabilityTimeSelector nestIndex={index} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AvailabilityDaySelector;
