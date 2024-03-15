'use client';

import {
  useForm,
  useFieldArray,
  FormProvider,
  useFormContext,
} from 'react-hook-form';

export default function App() {
  const methods = useForm();
  const { register, handleSubmit } = methods;
  const onSubmit = (data: any) => console.log('----', data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          {...register('firstName')}
          placeholder="first name"
        />
        <SecondName />
        <button type="submit">submit</button>
      </form>
    </FormProvider>
  );
}

const SecondName = () => {
  const { register, control } = useFormContext();
  return (
    <>
      <label htmlFor="secondName">Second Name</label>
      <input
        type="text"
        {...register('secondName')}
        placeholder="second name"
      />
    </>
  );
};
