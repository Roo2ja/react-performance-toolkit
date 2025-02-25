import React from "react";
import { useForm } from "react-hook-form";

const OptimizedForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
    <div>
      <h2>Optimized Form Example</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="Name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default OptimizedForm;
