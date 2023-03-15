export default function reverseString(str: string): string {
  const splitString = str.split("");
  const reverseArray = splitString.reverse();
  const joinArray = reverseArray.join("");

  return joinArray;
}
