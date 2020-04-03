import { compose } from './fp';
import { mod60, isZero } from './math'
import { first, second } from './collection'
import { splitByColon, toString } from './string'

const getHour = compose(first, splitByColon);
const getMinute = compose(second, splitByColon);

const singleDigitNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const isSingleDigit = (numberText:string) => singleDigitNumbers.includes(numberText);
const addPrefixDigit = (numberText:string) => isSingleDigit(numberText) ? `0${numberText}` : numberText;

const nextMinuteNumber = (number:number) => mod60(number - 1);
const nextHourNumber = (number:number) => isZero(number) ? number : number - 1;

const nextMinute = compose(addPrefixDigit, toString, nextMinuteNumber, Number);
const nextHour = compose(addPrefixDigit, toString, nextHourNumber, Number);

const passedOneMinute = (minute:string) => minute === '59';

const calculateNewTime = (startTime:string) => {
  const hour = getHour(startTime);
  const minute = getMinute(startTime);

  const newMinute = nextMinute(minute);
  const newHour = passedOneMinute(newMinute) ? nextHour(hour) : hour;

  return `${newHour}:${newMinute}`;
};

// most of these are for testing purposes
// export {
//   getHour,
//   getMinute,
//   isSingleDigit,
//   addPrefixDigit,
//   nextHourNumber,
//   nextMinuteNumber,
//   nextHour,
//   nextMinute,
//   calculateNewTime
// };
export { calculateNewTime };
