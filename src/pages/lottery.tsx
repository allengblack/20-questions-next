import { useForm, SubmitHandler } from "react-hook-form";

interface FormInput {
  values: string;
}

export default function Lottery() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInput>({
    resetOptions: { keepDirtyValues: false },
  });

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    const values = data.values.trim().split(" ");

    let isCorrect = false;
    for (const value of values) {
      isCorrect = value === "7";

      if (isCorrect) break;
    }

    isCorrect
      ? alert("Congratulations!")
      : alert("Try again. Better luck next time");

    reset();
  };

  return (
    <div className="p-2">
      <h2>Enter any three number separated by spaces</h2>

      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <label className="p-1" htmlFor="values">
          Enter your number
        </label>

        <input {...register("values", { required: true, maxLength: 5 })} />

        <div className="text-red-600">
          {errors.values && "Please enter three numbers separated by a space"}
        </div>

        <button className="text-white p-2 bg-sky-500 rounded-lg" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
