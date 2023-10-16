export function sum (a: number, b: number) {
  return a + b;
}

export function multiply (a: number, b: number) {
  return a * b;
}

export function splitToWords(sentence: string) {
  let result = sentence.toLowerCase().split(' ');
  console.log(result);
  return result;
}