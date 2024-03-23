'use client';
import { generateTimeOptions } from '@/app/lib/day';
import dayjs from 'dayjs';
import { Availability } from '@/app/lib/definitions';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  fromUnixTime,
  isToday,
  isBefore,
  parse,
  parseISO,
  startOfToday,
} from 'date-fns';
import { useEffect, useState } from 'react';

const availability: Availability = {
  availability: [
    {
      day: 'Sunday',
      timeRanges: [],
    },
    {
      day: 'Monday',
      timeRanges: [
        {
          startTime: {
            label: '10:00am',
            value: 1711101600947,
          },
          endTime: {
            label: '6:00pm',
            value: 1711130400947,
          },
        },
        {
          startTime: {
            label: '6:00pm',
            value: 1711130400947,
          },
          endTime: {
            label: '7:00pm',
            value: 1711134000947,
          },
        },
        {
          startTime: {
            label: '7:00pm',
            value: 1711134000947,
          },
          endTime: {
            label: '8:00pm',
            value: 1711137600947,
          },
        },
      ],
    },
    {
      day: 'Tuesday',
      timeRanges: [
        {
          startTime: {
            label: '10:00am',
            value: 1711101600947,
          },
          endTime: {
            label: '6:00pm',
            value: 1711130400947,
          },
        },
        {
          startTime: {
            label: '6:00pm',
            value: 1711130400947,
          },
          endTime: {
            label: '7:00pm',
            value: 1711134000947,
          },
        },
        {
          startTime: {
            label: '7:00pm',
            value: 1711134000947,
          },
          endTime: {
            label: '8:00pm',
            value: 1711137600947,
          },
        },
      ],
    },
    {
      day: 'Wednesday',
      timeRanges: [
        {
          startTime: {
            label: '10:00am',
            value: 1711101600947,
          },
          endTime: {
            label: '6:00pm',
            value: 1711130400947,
          },
        },
        {
          startTime: {
            label: '6:00pm',
            value: 1711130400947,
          },
          endTime: {
            label: '7:00pm',
            value: 1711134000947,
          },
        },
        {
          startTime: {
            label: '7:00pm',
            value: 1711134000947,
          },
          endTime: {
            label: '8:00pm',
            value: 1711137600947,
          },
        },
      ],
    },
    {
      day: 'Thursday',
      timeRanges: [
        {
          startTime: {
            label: '10:00am',
            value: 1711101600947,
          },
          endTime: {
            label: '6:00pm',
            value: 1711130400947,
          },
        },
        {
          startTime: {
            label: '6:00pm',
            value: 1711130400947,
          },
          endTime: {
            label: '7:00pm',
            value: 1711134000947,
          },
        },
        {
          startTime: {
            label: '7:00pm',
            value: 1711134000947,
          },
          endTime: {
            label: '8:00pm',
            value: 1711137600947,
          },
        },
      ],
    },
    {
      day: 'Friday',
      timeRanges: [
        {
          startTime: {
            label: '10:00am',
            value: 1711101600947,
          },
          endTime: {
            label: '6:00pm',
            value: 1711130400947,
          },
        },
      ],
    },
    {
      day: 'Saturday',
      timeRanges: [],
    },
  ],
};

const Calender3 = () => {
  let today = startOfToday();
  const options = generateTimeOptions();
  const [selectedDay, setSelectedDay] = useState(today);
  const [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'));
  const [slotOptions, setSlotOptions] = useState(options);
  let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  const previousMonth = () => {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
  };

  const nextMonth = () => {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
  };

  // we need to check two factors to know on which days slots are open
  // 1. is availability timeranges are present
  // 2. is the days are not in past
  const isSlotsAvailable = (day: Date) => {
    // 0 for Sunday, 1 for Monday and so on...
    const availabilityDay = availability.availability[getDay(day)];
    return availabilityDay.timeRanges.length >= 1 && !isBefore(day, today);
  };

  const getFilteredOptions = () => {};

  useEffect(() => {
    const timeRanges =
      availability.availability[getDay(selectedDay)].timeRanges;
    // console.log(timeRanges);
    // console.log(selectedDay.getTime(), '-----', timeRanges[0]?.endTime.value);
    console.log(
      fromUnixTime(timeRanges[0]?.endTime.value) + '!!!!!!!!!!!!!!!!!!!!'
    );
    console.log(dayjs(timeRanges[0]?.endTime.value));
  }, [selectedDay]);

  return (
    <div className="md:flex md:flex-row justify-center border-x">
      <div className="border-y md:w-72">oii</div>

      <div className="w-full md:w-[530px] md:h-[530px] p-3 border">
        <div className="flex flex-row justify-between">
          {/* banner: name of the month and prev and next month buttons */}
          <span className="font-medium">
            {format(firstDayCurrentMonth, 'MMMM yyyy')}
          </span>
          <div className="flex flex-row gap-2  md:gap-4">
            <button type="button" onClick={previousMonth}>
              <span className="sr-only">Previous month</span>
              <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
            </button>
            <button onClick={nextMonth} type="button">
              <span className="sr-only">Next month</span>
              <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="mt-10">
          {/* grid for week names */}
          <div className="grid grid-cols-7 text-sm text-center">
            <div>SUN</div>
            <div>MON</div>
            <div>TUE</div>
            <div>WED</div>
            <div>THU</div>
            <div>FRI</div>
            <div>SAT</div>
          </div>
          {/* grid for day numbers */}
          <div className="grid grid-cols-7 text-sm text-center mt-3">
            {days.map((day, index) => (
              <div
                key={day.toString()}
                className={classNames(colStartClasses[getDay(day)], '')}
              >
                <button
                  onClick={() => setSelectedDay(day)}
                  className={classNames(
                    isSlotsAvailable(day) && 'bg-gray-200',
                    !isSlotsAvailable(day) &&
                      'select-none pointer-events-none  text-slate-400 font-light',
                    isEqual(day, selectedDay) &&
                      'bg-gray-700 text-white transition-all duration-300',
                    isToday(day) &&
                      !isEqual(day, selectedDay) &&
                      'bg-gray-400 text-white',
                    'md:w-[62px] md:h-[62px] rounded-md m-1 hover:border-2 border-gray-600 font-medium'
                  )}
                >
                  <div className="select-none">{format(day, 'd')}</div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-y md:w-72 p-3">
        {/* re-write the this div */}
        <div className="font-bold">
          {availability.availability[getDay(selectedDay)].day}
        </div>
        <div style={{ height: '470px', overflow: 'scroll' }}>
          <ul>
            {slotOptions.map((slotOption, index) => {
              return (
                <li key={index}>
                  <button className="flex justify-center items-center md:w-60 h-10 border border-gray-300 m-3 rounded-md select-none">
                    {slotOption.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(' ');
}

let colStartClasses = [
  'col-start-1',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
  'col-start-7',
];

export default Calender3;
