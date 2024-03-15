'use client';

import { useFieldArray, useFormContext, Controller } from 'react-hook-form';

import { Availability } from '@/app/lib/definitions';
import { defaultStartTime, defaultEndTime } from '@/app/lib/day';
import TimeRangeSelector from '@/components/availability/timeRangeSelector';
import { useEffect, useState } from 'react';

const AvailabilityTimeSelector = ({
  nestIndex,
  day,
}: {
  nestIndex: number;
  day: string;
}) => {
  const [isChecked, setIsChecked] = useState(true);
  const { control } = useFormContext<Availability>();
  const { fields, remove, append } = useFieldArray<Availability>({
    control,
    name: `availability[${nestIndex}].timeRanges`,
  });

  //   useEffect(() => {
  //     if (!isChecked) {
  //       remove();
  //     } else {
  //       append({
  //         startTime: defaultStartTime,
  //         endTime: defaultEndTime,
  //       });
  //     }
  //   }, [isChecked]);

  return (
    <div className="mb-6">
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => {
            setIsChecked(!isChecked);
            if (!isChecked) {
              remove();
            } else {
              append({
                startTime: defaultStartTime,
                endTime: defaultEndTime,
              });
            }
          }}
        />
        {day}
      </label>
      {fields.map((field, index) => {
        return (
          <div key={field.id} className="flex flex-row">
            {isChecked && (
              <div>
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
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AvailabilityTimeSelector;
