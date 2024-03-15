'use client';

import {
  useForm,
  SubmitHandler,
  useFieldArray,
  useFormContext,
} from 'react-hook-form';

type DateInputs = {
  weekDay: string;
  startTime: string;
  endTime: string;
};

const AvailabilitySelector = ({ weekDay }: { weekDay: string }) => {
  const { register, control } = useFormContext<DateInputs>();

  return (
    <div className="flex flex-row gap-4">
      <input {...register(`weekDay`)} value={weekDay} />

      <section className="flex flex-row gap-4">
        <input type="text" {...register(`startTime`)} className="w-24" />
        <input type="text" {...register(`endTime`)} className="w-24" />
      </section>
    </div>
  );
};

export default AvailabilitySelector;
