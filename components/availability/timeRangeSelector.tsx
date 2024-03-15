'use client';

import Select from 'react-select';
import { useEffect, useState } from 'react';

import { TimeOptions } from '@/app/lib/definitions';

import {
  generateTimeOptions,
  defaultStartTime,
  defaultEndTime,
} from '@/app/lib/day';

const TimeRangeSelector = () => {
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
    <div className="w-96 mb-96 flex flex-row">
      {/* start time */}
      <Select
        defaultValue={selectedOptionStart}
        onChange={(option) => {
          if (option) {
            setSelectedOptionStart(option);
          }
        }}
        onMenuOpen={() => {
          const filteredOptions = options.filter((option) => {
            return option.value < selectedOptionEnd.value;
          });
          setStartOptions(filteredOptions);
          console.log(filteredOptions);
          console.log(startOptions);
        }}
        onMenuClose={() => {}}
        options={startOptions}
        components={{
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
        }}
      />
      {/* end time */}
      <Select
        //   value={}
        defaultValue={selectedOptionEnd}
        onChange={(option) => {
          if (option) {
            setSelectedOptionEnd(option);
          }
        }}
        onMenuOpen={() => {
          setEndOptions(
            options.filter((option) => {
              return option.value > selectedOptionStart.value;
            })
          );
        }}
        onMenuClose={() => {}}
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
