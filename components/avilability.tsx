'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import AvailabilitySelector from '@/components/availabilitySelector';
import App from './filedArrayCheck';
import App2 from './NestedfiledArrayCheck';

enum WeekDay {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

const Availablity = () => {
  return (
    <div className="w-full h-screen">
      {/* <h3 className="font-bold">Availability</h3>
      <span>Add your availabilities here</span>
      <div>
        <button className=" p-2 bg-black text-white">Add Availability</button>
        // <AvailabilitySelector /> */}
      <div className="bg-violet-200 mb-11">
        <AvailabilitySelector weekDay="Sunday" />
      </div>
      <div className="bg-green-200">
        <App />
      </div>
      <div className="mt-[50px]"></div>
      <div className="bg-pink-200">
        <App2 />
      </div>
      {/* </div> */}
    </div>
  );
};

export default Availablity;
