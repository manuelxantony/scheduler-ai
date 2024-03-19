'use client';

import Select from 'react-select';
import { useEffect, useState } from 'react';
import { ControllerRenderProps } from 'react-hook-form';

import { TimeOptions } from '@/app/lib/definitions';

import { generateTimeOptions } from '@/app/lib/day';
import dayjs from 'dayjs';

type props = {
  value?: ControllerRenderProps;
  onChange?: ControllerRenderProps;
  defaultStartTime: TimeOptions;
  defaultEndTime: TimeOptions;
};

// consider using useMemo for generateTimeOptions -> in case of performance issue
const TimeRangeSelector = ({
  value,
  onChange,
  defaultStartTime,
  defaultEndTime,
}: props) => {
  const [selectedOptionStart, setSelectedOptionStart] = useState<TimeOptions>({
    ...defaultStartTime,
  });
  const [selectedOptionEnd, setSelectedOptionEnd] = useState<TimeOptions>({
    ...defaultEndTime,
  });

  const options = generateTimeOptions();
  const [startOptions, setStartOptions] = useState(options);
  const [endOptions, setEndOptions] = useState(options);

  return (
    <div className="flex flex-row gap-3 justify-start items-center">
      {/* start time */}
      <Select
        className="text-sm w-[80px]"
        defaultValue={selectedOptionStart}
        onChange={(option) => {
          if (option) {
            setSelectedOptionStart(option);
            // @ts-ignore
            onChange({ ...value, startTime: option });
          }
        }}
        onMenuOpen={() => {
          // should this be in a useEffect
          // also consider using useMemo
          const filteredOptions = options.filter((option) => {
            const time = dayjs(option.value);
            const selectedTime = dayjs(selectedOptionEnd.value);
            return time.isBefore(selectedTime);
          });
          setStartOptions(filteredOptions);
        }}
        options={startOptions}
        components={{
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
        }}
      />
      <span className="text-sm">-</span>
      {/* end time */}
      <Select
        className="text-sm w-[80px]"
        defaultValue={selectedOptionEnd}
        onChange={(option) => {
          if (option) {
            setSelectedOptionEnd(option);
            // @ts-ignore
            onChange({ ...value, endTime: option });
          }
        }}
        onMenuOpen={() => {
          // should this be in a useEffect
          // also consider using useMemo
          setEndOptions(
            options.filter((option) => {
              const time = dayjs(option.value);
              const selectedTime = dayjs(selectedOptionStart.value);
              return time.isAfter(selectedTime);
            })
          );
        }}
        options={endOptions}
        components={{
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
        }}
      />
    </div>
  );
};

export default TimeRangeSelector;
