'use client';

import { useFormContext, useFieldArray } from 'react-hook-form';

import { Availability } from '@/app/lib/definitions';
import AvailabilityTimeSelector from '@/components/availability/availabilityTimeSelector';

const AvailabilityDaySelector = () => {
  const { control } = useFormContext<Availability>();

  const { fields } = useFieldArray<Availability>({
    name: 'availability',
    control,
  });

  return (
    <div>
      {fields.map((field, index) => {
        return (
          <div key={field.id}>
            <div>
              <AvailabilityTimeSelector
                nextIndex={index}
                // @ts-ignore
                day={field.day}
                name={`availability[${index}].timeRanges`}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AvailabilityDaySelector;
