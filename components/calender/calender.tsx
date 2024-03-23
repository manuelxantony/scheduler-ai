'use client';

import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

const CalenderView = () => {
  const [date, setDate] = useState<Date>(new Date());

  const date1: Date = new Date('2024-03-18');
  const date2: Date = new Date('2024-03-19');
  const date3: Date = new Date('2024-03-20');
  const date4: Date = new Date('2024-03-21');
  const date5: Date = new Date('2024-03-22');
  const date6: Date = new Date('2024-03-23');
  const dates: Date[] = [date1, date2, date3, date4, date5, date6];

  useEffect(() => {
    console.log(date);
  }, [date]);

  return (
    <div>
      calender
      <div className="calendar-container">
        <Calendar onChange={(date) => setDate(date as Date)} value={date} />
      </div>
      {dates.length > 0 ? (
        <p className="text-center">
          <span className="bold">Start:</span> {dates[0].toDateString()}
          &nbsp;|&nbsp;
          <span className="bold">End:</span> {dates[1].toDateString()}
        </p>
      ) : (
        <p className="text-center">
          <span className="bold">Default selected date:</span>{' '}
          {date.toDateString()}
        </p>
      )}
    </div>
  );
};
``;
export default CalenderView;
