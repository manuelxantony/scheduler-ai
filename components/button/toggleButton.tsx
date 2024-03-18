'use client';

import classNames from 'classnames';
import { useState } from 'react';

type props = {
  isSelected?: boolean;
  onSelect: (isSelected: boolean) => void;
};

const ToggleButton = ({ onSelect, isSelected }: props) => {
  const [isOn, setIsOn] = useState(isSelected);
  return (
    <div
      onClick={() => {
        setIsOn(!isOn);
        onSelect(!isOn);
      }}
      className={classNames(
        'flex w-[35px] h-5 bg-gray-200 p-[2px] rounded-full transition-all duration-500',
        {
          'bg-gray-950': isOn,
        }
      )}
    >
      <span
        className={classNames(
          'w-4 h-4 bg-white rounded-full  transition-all duration-300 shadow-lg',
          {
            'ml-4': isOn,
          }
        )}
      ></span>
    </div>
  );
};

export default ToggleButton;
