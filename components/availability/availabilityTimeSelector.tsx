'use client';

import { useFieldArray, useFormContext, Controller } from 'react-hook-form';

import { AddOutline, TrashBinOutline } from 'react-ionicons';

import { Availability } from '@/app/lib/definitions';
import { defaultStartTime, defaultEndTime } from '@/app/lib/day';
import TimeRangeSelector from '@/components/availability/timeRangeSelector';
import { useEffect, useState } from 'react';
import TrashButton from '../button/trashbutton';
import AddButton from '../button/addButton';

const AvailabilityTimeSelector = ({
  nestIndex,
  day,
}: {
  nestIndex: number;
  day: string;
}) => {
  const [isChecked, setIsChecked] = useState(true);
  const [isFirstTimeChanged, setIsFirstTimeChanged] = useState(false);
  const { control } = useFormContext<Availability>();
  const { fields, remove, append } = useFieldArray<Availability>({
    control,
    name: `availability[${nestIndex}].timeRanges`,
  });

  useEffect(() => {
    if (isFirstTimeChanged) {
      if (isChecked) {
        append({
          startTime: defaultStartTime,
          endTime: defaultEndTime,
        });
      } else {
        remove();
      }
    }
  }, [isChecked]);

  return (
    <div className="mb-2 flex flex-row">
      <div className="w-[123px] mt-2">
        <label className="text-sm">
          <input
            className="mr-3"
            type="checkbox"
            checked={isChecked}
            onChange={() => {
              setIsFirstTimeChanged(true);
              setIsChecked(!isChecked);
            }}
          />
          {day}
        </label>
      </div>
      <div className="flex flex-row justify-start items-center min-h-[46px]">
        <div>
          {fields.map((field, index) => {
            return (
              <div key={field.id} className="my-1">
                {isChecked && (
                  <div className="flex flex-row justify-start items-center gap-5">
                    <Controller
                      name={`availability[${nestIndex}].timeRanges[${index}]`}
                      render={({ field }) => <TimeRangeSelector {...field} />}
                    />
                    {index == 0 ? (
                      <AddButton
                        onClick={() =>
                          append({
                            startTime: defaultStartTime,
                            endTime: defaultEndTime,
                          })
                        }
                        tipText="Add time slotes"
                      />
                    ) : (
                      <TrashButton
                        onClick={() => remove(index)}
                        tipText="Delete"
                      />
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AvailabilityTimeSelector;
