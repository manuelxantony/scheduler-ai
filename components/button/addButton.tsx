import React from 'react';
import { useState, JSX } from 'react';
import { AddOutline } from 'react-ionicons';

type props = {
  onClick?: React.MouseEventHandler;
  tipText?: string;
};

const AddButton = ({ onClick, tipText }: props): JSX.Element => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div className="group relative">
      {tipText && (
        <div className="w-[98px] p-1 absolute  left-10 scale-0 rounded bg-gray-400  group-hover:scale-100">
          <span className="text-xs text-white">{tipText}</span>
        </div>
      )}
      <div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={onClick}
      >
        <div className="p-2 rounded-md hover:bg-green-100">
          {isHovering ? (
            <AddOutline height="18px" width="18px" color={'#2E8B57'} />
          ) : (
            <AddOutline height="18px" width="18px" />
          )}
        </div>
      </div>
    </div>
  );
};

export default AddButton;
