export type Availability = {
  availability: {
    day: string;
    timeRanges: TimeRanges[];
  }[];
};

export type TimeRanges = {
  startTime: Date;
  endTime: Date;
};

export type TimeOptions = {
  label: string;
  value: number;
};
