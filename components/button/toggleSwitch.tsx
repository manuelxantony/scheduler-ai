'use client';

import classNames from 'classnames';
import { useState } from 'react';

type props = {
  isSelected: boolean;
  onSelect: (isSelected: boolean) => void;
};

const ToggleSwitch = ({ onSelect, isSelected }: props) => {
  const [isOn, setIsOn] = useState<boolean>(isSelected);
  return (
    <div
      onClick={() => {
        const isOnInverted = !isOn;
        setIsOn(isOnInverted);
        onSelect(isOnInverted);
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

export default ToggleSwitch;
