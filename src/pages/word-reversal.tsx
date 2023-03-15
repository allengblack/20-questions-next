import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import reverseString from "@/utils/reverseString";

interface FormInput {
  word: string;
}

export default function WordReversal() {
  const [word, setWord] = useState<string | null>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInput>({
    resetOptions: { keepDirtyValues: false },
  });

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log({ data });
    const reversedWord = reverseString(data.word);
    setWord(reversedWord);
    reset();
  };

  return (
    <div className="p-2">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="word">Enter the word you want reversed: </label>

        <input
          {...register("word", { required: true })}
          className="border-3 p-2"
        />
        <br />

        <button className="text-white p-2 bg-sky-500 rounded-lg" type="submit">
          Reverse
        </button>
      </form>

      <p className="text-green-800">{word ?? ""}</p>
    </div>
  );
}
