'use client';

import { useFieldArray, useFormContext, Controller } from 'react-hook-form';

import { Availability } from '@/app/lib/definitions';
import { defaultStartTime, defaultEndTime } from '@/app/lib/day';
import TimeRangeSelector from '@/components/availability/timeRangeSelector';

const AvailabilityTimeSelector = ({ nestIndex }: { nestIndex: number }) => {
  const { control } = useFormContext<Availability>();
  const { fields, remove, append } = useFieldArray<Availability>({
    control,
    name: `availability[${nestIndex}].timeRanges`,
  });

  return (
    <div className="mb-6">
      {fields.map((field, index) => {
        return (
          <div key={field.id} className="flex flex-row">
            <Controller
              name={`availability[${nestIndex}].timeRanges[${index}]`}
              render={({ field }) => <TimeRangeSelector {...field} />}
            />

            {index == 0 ? (
              <button
                type="button"
                onClick={() =>
                  append({
                    startTime: defaultStartTime,
                    endTime: defaultEndTime,
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
