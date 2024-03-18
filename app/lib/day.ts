import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

import { TimeOptions } from '@/app/lib/definitions';

dayjs.extend(utc);
const INCREMENT = 15;

const endTime = dayjs().utc().set('hour', 18).set('minute', 0).set('second', 0);

const startTime = dayjs()
  .utc()
  .set('hour', 10)
  .set('minute', 0)
  .set('second', 0);

export const defaultStartTime: TimeOptions = {
  label: dayjs(startTime).utc().format('h:mma'),
  value: startTime.toDate().valueOf(),
};
export const defaultEndTime: TimeOptions = {
  label: dayjs(endTime).utc().format('h:mma'),
  value: endTime.toDate().valueOf(),
};

const dayStart = dayjs().utc().set('hour', 0).set('minute', 0).set('second', 0);
const dayEnd = dayjs()
  .utc()
  .set('hour', 23)
  .set('minute', 59)
  .set('second', 59);

export const dayStartTime: TimeOptions = {
  label: dayjs(dayStart).utc().format('h:mma'),
  value: endTime.toDate().valueOf(),
};

export const dayEndTime: TimeOptions = {
  label: dayjs(dayEnd).utc().format('h:mma'),
  value: endTime.toDate().valueOf(),
};

export const generateTimeOptions = () => {
  const options: TimeOptions[] = [];
  const end = dayjs().utc().endOf('day');

  for (
    let start = dayjs().utc().startOf('day');
    start.isBefore(end);
    start = start.add(
      INCREMENT + (!start.add(INCREMENT).isSame(start, 'day') ? -1 : 0),
      'minutes'
    )
  ) {
    options.push({
      label: dayjs(start).utc().format('h:mma'),
      value: start.toDate().valueOf(),
    });
  }
  options.push({
    label: dayjs(end).utc().format('h:mma'),
    value: end.toDate().valueOf(),
  });

  return options;
};
