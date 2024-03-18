import React from 'react';
import { useState, JSX } from 'react';
import { TrashBinOutline } from 'react-ionicons';

type Props = {
  onClick?: React.MouseEventHandler;
  tipText?: string;
};

const TrashButton = ({ onClick, tipText }: Props): JSX.Element => {
  const [isHovering, setIsHovering] = useState(false);
  console.log(isHovering);
  return (
    <div className="group relative">
      {tipText && (
        <div className="p-1 absolute  left-10 scale-0 rounded bg-gray-400  group-hover:scale-100">
          <span className="text-xs text-white">{tipText}</span>
        </div>
      )}
      <button
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={onClick}
      >
        {isHovering ? (
          <div className="bg-red-100 p-2 rounded-md">
            <TrashBinOutline height="17px" width="17px" color="red" />
          </div>
        ) : (
          <div className="p-2 rounded-md">
            <TrashBinOutline height="17px" width="17px" />
          </div>
        )}
      </button>
    </div>
  );
};

export default TrashButton;
