export type Availability = {
  availability: {
    day: string;
    timeRanges: TimeRanges[];
  }[];
};

export type TimeRanges = {
  startTime: TimeOptions;
  endTime: TimeOptions;
};

export type TimeOptions = {
  label: string;
  value: number;
};
