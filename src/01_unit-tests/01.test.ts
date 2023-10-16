import { multiply, splitToWords, sum } from "./01";


//определяем переменные, но не присваиваем значения
let a: number;
let b: number;
let c: number;

//чтобы перед каждый новым тестом, значение этих переменных
// присваивалось согласно beforeEach. Это нужно на случай,
// если в каком-то из тестов мы переопределили значение переменной

beforeEach(() => {
  a = 1;
  b = 2;
  c = 3;
})

test.skip('sum should be correct', () => {

  //data
  a = 100;

  //action
  let result1 = sum(a, b);
  let result2 = sum(b, c);

  //expect result
  expect(result1).toBe(102);
  expect(result2).toBe(5);
})

test.skip('multiply should be correct', () => {
  const a = 1;
  const b = 2;
  const c = 3;

  let result1 = multiply(a, b);
  let result2 = multiply(b, c);

  expect(result1).toBe(2);
  expect(result2).toBe(6);
})

test.skip('sentence have to split correct', () => {
  const text1 = 'Hello Fluffy Bunny!';
  const text2 = 'So close to heaven but so far from everyone'

  let result1 = splitToWords(text1);
  let result2 = splitToWords(text2);

  expect(result1.length).toBe(3);
  expect(result1[0]).toBe('hello');
  expect(result1[1]).toBe('fluffy');
  expect(result1[2]).toBe('bunny!');

  expect(result2.length).toBe(9);
})