const mod = (divisor: number) => (dividend: number) =>
  ((dividend % divisor) + divisor) % divisor;
const mod60 = mod(60);

const isZero = (number: number) => number === 0;

export { mod60, isZero };
