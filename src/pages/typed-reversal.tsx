import { useForm, SubmitHandler } from "react-hook-form";
import { useState, useEffect } from "react";
import reverseString from "../utils/reverseString";

interface FormInput {
  input: string;
}

const words = ["cow", "maggot", "argot", "balloon", "last", "sekiro"];

export default function TypedReversal() {
  const [word, setWord] = useState<string>("");

  useEffect(() => {
    setWord(words[Math.floor(Math.random() * words.length)]);
  }, []);

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    data.input === reverseString(word)
      ? alert("Correct! ✅")
      : alert("Wrong! ❌");

    reset();
    setWord(words[Math.floor(Math.random() * words.length)]);
  };

  const { register, handleSubmit, reset } = useForm<FormInput>({
    resetOptions: { keepDirtyValues: false },
  });

  return (
    <div className="p-2">
      <p>Type in this word in reverse: &quot;{word}&quot;</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("input", { required: true })} />

        <button className="text-white p-2 bg-sky-500 rounded-lg" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
