'use client';

import { useForm, SubmitHandler, useFieldArray } from 'react-hook-form';

type DateInputs = {
  dates: {
    weekDay: string;
    startTime: string;
    endTime: string;
  }[];
};

const AvailabilitySelector = ({ weekDay }: { weekDay: string }) => {
  const { register, handleSubmit, control } = useForm<DateInputs>({
    defaultValues: {
      dates: [{ weekDay, startTime: '9.00 am', endTime: '7.00 pm' }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: 'dates',
    control,
  });

  const onSubmit: SubmitHandler<DateInputs> = (data) => console.log(data);

  return (
    <div className="flex flex-row gap-4">
      {weekDay}
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, index) => {
          return (
            <div key={field.id}>
              <section className="flex flex-row gap-4">
                <input
                  type="text"
                  {...register(`dates.${index}.startTime`)}
                  className="w-24"
                />
                <input
                  type="text"
                  {...register(`dates.${index}.endTime`)}
                  className="w-24"
                />
                {index == 0 ? (
                  <button
                    type="button"
                    onClick={() => {
                      append({
                        weekDay: weekDay,
                        startTime: '9.00 am',
                        endTime: '7.00 pm',
                      });
                    }}
                  >
                    Append
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      remove(index);
                    }}
                  >
                    Delete
                  </button>
                )}
              </section>
            </div>
          );
        })}

        <input type="submit" />
      </form>
    </div>
  );
};

export default AvailabilitySelector;
