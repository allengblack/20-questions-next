import { useState, FormEvent } from "react";
import styles from "../styles/Home.module.css";
import { useForm, SubmitHandler } from "react-hook-form";

type FormInput = {
  firstName: string;
  lastName: string;
  age: number;
};

const NameConcat = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInput>({
    resetOptions: { keepDirtyValues: false },
  });

  const [message, setMessage] = useState<string | null>();
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [age, setAge] = useState<number>(0);

  const resetFormData = () => {
    if (firstName != "") setFirstName("");
    if (lastName != "") setLastName("");
    if (age != 0) setAge(0);
  };

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    setFirstName(data.firstName);
    setLastName(data.lastName);
    setAge(data.age);

    setMessage(`Welcome, ${data.firstName} ${data.lastName}, ${data.age}!`);
    reset();
  };

  const handleReset = (event: FormEvent) => {
    event.preventDefault();
    reset();
    setMessage(null);
    resetFormData();
  };

  return (
    <div className="p-2">
      <form id="name-form" onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formInput}>
          <label className="p-1" htmlFor="firstName">
            Enter your first name
          </label>

          <input
            {...register("firstName", { required: true })}
            className="border-3 p-2"
          />
          {errors.firstName && "First name is required"}
        </div>
        <div className={styles.formInput}>
          <label className="p-1" htmlFor="lastName">
            Enter your last name
          </label>

          <input
            {...register("lastName", { required: true })}
            className="border-3 p-2"
          />
          {errors.lastName && "Last name is required"}
        </div>
        <div className={styles.formInput}>
          <label className="p-1" htmlFor="age">
            Enter your age
          </label>

          <input
            type="number"
            {...register("age", { required: true, min: 18 })}
            className="border-3 p-2"
          />
          {errors.age && "Age is required and must be over 18"}
        </div>
        c
        <button className="text-white p-2 bg-sky-500 rounded-lg" type="submit">
          Submit
        </button>
        <button
          className="text-white ml-2 p-2 bg-sky-500 rounded-lg"
          onClick={handleReset}
        >
          Reset
        </button>
      </form>

      {message ?? ""}
    </div>
  );
};

export default NameConcat;
