'use client';

import Select from 'react-select';
import { useEffect, useState } from 'react';
import { ControllerRenderProps } from 'react-hook-form';

import { TimeOptions } from '@/app/lib/definitions';

import {
  generateTimeOptions,
  defaultStartTime,
  defaultEndTime,
} from '@/app/lib/day';

// consider using useMemo for generateTimeOptions -> in case of performance issue
const TimeRangeSelector = ({ value, onChange }: ControllerRenderProps) => {
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
            onChange({ ...value, startTime: option });
          }
        }}
        onMenuOpen={() => {
          // should this be in a useEffect
          // also consider using useMemo
          const filteredOptions = options.filter((option) => {
            return option.value < selectedOptionEnd.value;
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
        className="text-sm w-[80px] "
        defaultValue={selectedOptionEnd}
        onChange={(option) => {
          if (option) {
            setSelectedOptionEnd(option);
            onChange({ ...value, endTime: option });
          }
        }}
        onMenuOpen={() => {
          // should this be in a useEffect
          // also consider using useMemo
          setEndOptions(
            options.filter((option) => {
              return option.value > selectedOptionStart.value;
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
