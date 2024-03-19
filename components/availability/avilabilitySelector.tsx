import { Availability, TimeOptions } from '@/app/lib/definitions';
import React, { useState } from 'react';
import AddButton from '../button/addButton';
import TrashButton from '../button/trashButton';
import { Controller, useFormContext } from 'react-hook-form';
import TimeRangeSelector from './timeRangeSelector';

type props = {
  availabilityIndex: number;
  defaultStartTime: TimeOptions;
  defaultEndTime: TimeOptions;
  index: number;
  onClickAdd: React.MouseEventHandler;
  onClickRemove: (index: number) => void;
};

const AvailabilitySelector = ({
  availabilityIndex,
  index,
  onClickAdd,
  onClickRemove,
  defaultStartTime,
  defaultEndTime,
}: props) => {
  return (
    <div className="flex flex-row justify-start items-center gap-5">
      <Controller
        name={`availability[${availabilityIndex}].timeRanges[${index}]`}
        render={({ field }) => (
          // @ts-ignore
          <TimeRangeSelector
            {...field}
            defaultStartTime={defaultStartTime}
            defaultEndTime={defaultEndTime}
          />
        )}
      />
      {index == 0 ? (
        <AddButton onClick={onClickAdd} tipText="Add time slotes" />
      ) : (
        <TrashButton onClick={() => onClickRemove(index)} tipText="Delete" />
      )}
    </div>
  );
};

export default AvailabilitySelector;
