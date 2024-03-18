'use client';

import { useEffect, useState } from 'react';
import {
  useFieldArray,
  useFormContext,
  FieldArrayWithId,
} from 'react-hook-form';

import { Availability, TimeOptions } from '@/app/lib/definitions';
import { defaultStartTime, defaultEndTime } from '@/app/lib/day';
import AvailabilitySelector from './avilabilitySelector';
import dayjs from 'dayjs';

const AvailabilityTimeSelector = ({
  nextIndex: nextIndex,
  day,
  name,
}: {
  nextIndex: number;
  day: string;
  name: string;
}) => {
  const [isChecked, setIsChecked] = useState(true);
  const [isFirstTimeChanged, setIsFirstTimeChanged] = useState(false);
  const { control, getValues } = useFormContext<Availability>();
  const { fields, remove, append } = useFieldArray<Availability>({
    control,
    // name: `availability[${nextIndex}].timeRanges`,
    name: name,
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

  const onClickAdd = () => {
    const endRanges = getValues(`${name}.${fields.length - 1}`);
    const startRanges = getValues(`${name}.0`);

    // generateSlotRanges(startRanges, endRanges);
    append({
      startTime: defaultStartTime,
      endTime: defaultEndTime,
    });
  };

  // will implement in future
  // this will used for appending and prepending times from the time ranges selected
  // type is FieldArrayWithId for startRanges and endRanges
  const generateSlotRanges = (startRanges: any, endRanges: any) => {
    // check if
    // // startRanges.startTime == start of day and
    // // endRanges.endTIme == end of the day
    // then
    // // dont append anything also amy be add a message that slots are full
    // next
    // check if
    // not endRanges.end is not end of day
    // then
    // // append start as endRanges.start = startRanges.end
    // // and end as endRangs.end + 1 hour if endRangs.end + 1 hxour is in same day else append eod
    // const val = (startRanges as unknown as TimeRanges).startTime;
    // console.log(val);
    // const timezoneStartRange = dayjs((startRanges as TimeRanges).start).utc(); // as unknown
    // console.log(timezoneStartRange, '-=--=-=-=-==-=343434==-=-=][][][]');
    // const timeEndRange = dayjs((endRanges as TimeRanges).end)
    //   .utc()
    //   .format('h:mma'); // as unknown
    // console.log(timeEndRange);
  };

  const onClickRemove = (index: number) => {
    remove(index);
  };

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
                  <AvailabilitySelector
                    availabilityIndex={nextIndex}
                    index={index}
                    defaultStartTime={defaultStartTime}
                    defaultEndTime={defaultEndTime}
                    onClickAdd={onClickAdd}
                    onClickRemove={onClickRemove}
                  />
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
