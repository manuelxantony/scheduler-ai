'use client';

/* eslint-disable */
import { useEffect, useState } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';

import { Availability, TimeOptions, TimeRanges } from '@/app/lib/definitions';
import { defaultStartTime, defaultEndTime } from '@/app/lib/day';
import AvailabilitySelector from './avilabilitySelector';
import dayjs from 'dayjs';
import ToggleSwitch from '@/components/button/toggleSwitch';

const AvailabilityTimeSelector = ({
  nextIndex: nextIndex,
  day,
  name,
}: {
  nextIndex: number;
  day: string;
  name: string;
}) => {
  const [startTIme, setStartTime] = useState<TimeOptions>(defaultStartTime);
  const [endTIme, setEndTime] = useState<TimeOptions>(defaultEndTime);
  const [isSelected, setIsSelected] = useState(true);
  const [isFirstTimeChanged, setIsFirstTimeChanged] = useState(false);
  const { control, getValues } = useFormContext<Availability>();
  const { fields, remove, append } = useFieldArray<Availability>({
    control,
    // @ts-ignore
    name: name,
  });

  useEffect(() => {
    if (!isFirstTimeChanged) {
      setIsFirstTimeChanged(true);
    } else {
      if (isSelected) {
        append({
          // @ts-ignore
          startTime: defaultStartTime,
          endTime: defaultEndTime,
        });
      } else {
        remove();
      }
    }
  }, [isSelected]);

  const onClickAdd = () => {
    // @ts-ignore
    const endRanges = getValues(`${name}.${fields.length - 1}`);
    // @ts-ignore
    const startRanges = getValues(`${name}.0`);

    const [start, end] = generateSlotRanges(
      startRanges as TimeRanges,
      endRanges as TimeRanges
    );
    appendDateRanges(start, end);
  };

  const generateSlotRanges = (
    startRanges: TimeRanges,
    endRanges: TimeRanges
  ) => {
    const startTime = dayjs(
      (
        (startRanges as unknown as TimeRanges)
          .startTime as unknown as TimeOptions
      ).value
    ).utc();

    // endTIme Will be the next start ; if same day
    const endTime = dayjs(
      ((endRanges as unknown as TimeRanges).endTime as unknown as TimeOptions)
        .value
    ).utc();

    let nextEndTime: dayjs.Dayjs = endTime;

    if (endTime.hour() == 23) {
      switch (endTime.minute()) {
        case 45:
          nextEndTime = dayjs(endTime).add(14, 'minutes').add(59, 'seconds');
          break;
        case 30:
          nextEndTime = dayjs(endTime).add(29, 'minutes').add(59, 'seconds');
          break;
        case 15:
          nextEndTime = dayjs(endTime).add(44, 'minutes').add(59, 'seconds');
          break;
        default:
          nextEndTime = dayjs(endTime).add(59, 'minutes').add(59, 'seconds');
          break;
      }
    } else if (endTime.hour() < 23) {
      nextEndTime = dayjs(endTime).add(1, 'hour');
    }
    return [endTime, nextEndTime];
  };

  const appendDateRanges = (start: dayjs.Dayjs, end: dayjs.Dayjs) => {
    if (start.hour() <= 23 && start.minute() <= 45) {
      const nextStartTime: TimeOptions = {
        label: dayjs(start).utc().format('h:mma'),
        value: start.toDate().valueOf(),
      };
      const nextEndTime: TimeOptions = {
        label: dayjs(end).utc().format('h:mma'),
        value: end.toDate().valueOf(),
      };
      setStartTime(nextStartTime);
      setEndTime(nextEndTime);
      append({
        // @ts-ignore
        startTime: nextStartTime,
        endTime: nextEndTime,
      });
    }
  };

  const onClickRemove = (index: number) => {
    remove(index);
  };
  return (
    <div className="mb-2 flex flex-row">
      <div className="w-[135px] flex flex-row items-start mt-3 gap-3">
        <ToggleSwitch onSelect={setIsSelected} isSelected />
        <span className="text-sm">{day}</span>
      </div>
      <div className="flex flex-row justify-start items-center min-h-[49px]">
        <div>
          {fields.map((field, index) => {
            return (
              <div key={field.id} className="my-1">
                {isSelected && (
                  <AvailabilitySelector
                    availabilityIndex={nextIndex}
                    index={index}
                    defaultStartTime={startTIme}
                    defaultEndTime={endTIme}
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
/* eslint-enable */
