export type Availability = {
  availability: {
    day: string;
    timeRanges: {
      startTime: TimeOptions;
      endTime: TimeOptions;
    }[];
  }[];
};

export type TimeOptions = {
  label: string;
  value: number;
};
