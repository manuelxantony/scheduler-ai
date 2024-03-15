'use client';

import { useFieldArray, useFormContext } from 'react-hook-form';

import { Availability } from '@/app/lib/definitions';

const AvailabilityTimeSelector = ({ nestIndex }: { nestIndex: number }) => {
  const { control, register } = useFormContext<Availability>();
  const { fields, remove, append } = useFieldArray<Availability>({
    control,
    name: `availability[${nestIndex}].timeRanges`,
  });

  return (
    <div className="mb-6">
      {fields.map((field, index) => {
        return (
          <div key={field.id}>
            <input
              type="text"
              {...register(
                `availability[${nestIndex}].timeRanges[${index}].startTime`
              )}
              className="w-24 border border-2 border-green-200"
            />
            <input
              type="text"
              {...register(
                `availability[${nestIndex}].timeRanges[${index}].endTime`
              )}
              className="w-24 border border-2 border-pink-200"
            />
            {index == 0 ? (
              <button
                type="button"
                onClick={() =>
                  append({
                    startTime: '10.00 am',
                    endTime: '5.00 pm',
                  })
                }
              >
                Add
              </button>
            ) : (
              <button type="button" onClick={() => remove(index)}>
                Delete
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AvailabilityTimeSelector;
