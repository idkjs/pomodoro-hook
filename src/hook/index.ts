// fp compose
const compose = (...fns: any[]) => (value: any) =>
  fns.reduceRight((acc, fn) => fn(acc), value);

// collection handling helper functions
const first = (list: any) => list[0];
const second = (list: any) => list[1];

// math helper functions
const mod = (divisor: number) => (dividend: number) =>
  ((dividend % divisor) + divisor) % divisor;
const mod60 = mod(60);

const isZero = (number: number) => number === 0;

// string mangling helper functions
const split = (separator: string) => (text: string) => text.split(separator);
const splitByColon = split(':');

const toString = (number: number) => number.toString();

// calculate time using above helpers
const getHour = compose(first, splitByColon);
const getMinute = compose(second, splitByColon);

const singleDigitNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const isSingleDigit = (numberText: string) =>
  singleDigitNumbers.includes(numberText);
const addPrefixDigit = (numberText: string) =>
  isSingleDigit(numberText) ? `0${numberText}` : numberText;

const nextMinuteNumber = (number: number) => mod60(number - 1);
const nextHourNumber = (number: number) =>
  isZero(number) ? number : number - 1;

const nextMinute = compose(addPrefixDigit, toString, nextMinuteNumber, Number);
const nextHour = compose(addPrefixDigit, toString, nextHourNumber, Number);

const passedOneMinute = (minute: string) => minute === '59';

const calculateNewTime = (startTime: string) => {
  const hour = getHour(startTime);
  const minute = getMinute(startTime);

  const newMinute = nextMinute(minute);
  const newHour = passedOneMinute(newMinute) ? nextHour(hour) : hour;

  return `${newHour}:${newMinute}`;
};

export {
  first,
  second,
  compose,
  mod60,
  isZero,
  splitByColon,
  toString,
  getHour,
  getMinute,
  isSingleDigit,
  addPrefixDigit,
  nextHourNumber,
  nextMinuteNumber,
  nextHour,
  nextMinute,
  calculateNewTime,
};
