export type Availability = {
  availability: {
    day: string;
    timeRanges: {
      startTime: string;
      endTime: string;
    }[];
  }[];
};

export type TimeOptions = {
  label: string;
  value: number;
};
