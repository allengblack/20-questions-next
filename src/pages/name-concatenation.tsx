import { useState, FormEvent } from "react";
import styles from "../styles/Home.module.css";

const NameConcat = () => {
  const [message, setMessage] = useState<string | null>();
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  let [age, setAge] = useState<number>(0);

  const resetFormData = () => {
    if (firstName != "") setFirstName("");
    if (lastName != "") setLastName("");
    if (age != 0) setAge(0);
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    setFirstName(form.firstName.value as string);
    setLastName(form.lastName.value as string);
    setAge(form.age.value as number);

    setMessage(`Welcome, ${firstName} ${lastName}, ${age}!`);
    resetFormData();
  };

  const handleReset = (event: FormEvent) => {
    event.preventDefault();
    setMessage(null);
    resetFormData();
  };

  return (
    <div className="p-2">
      <form id="name-form" onSubmit={handleFormSubmit}>
        <div className={styles.formInput}>
          <label className="p-1" htmlFor="firstName">
            Enter your first name
          </label>

          <input
            value={firstName || ""}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            className="border-3 p-2"
            type="text"
            id="firstName"
            required
          />
        </div>

        <div className={styles.formInput}>
          <label className="p-1" htmlFor="lastName">
            Enter your last name
          </label>

          <input
            value={lastName || ""}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            className="border-3 p-2"
            type="text"
            id="lastName"
            required
          />
        </div>

        <div className={styles.formInput}>
          <label className="p-1" htmlFor="age">
            Enter your age
          </label>

          <input
            value={age}
            onChange={(e) => {
              setAge(e.target.value as unknown as number);
            }}
            className="border-3 p-2"
            type="number"
            id="age"
            required
          />
        </div>

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
