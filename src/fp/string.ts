const split = (separator: string) => (text: string) => text.split(separator);
const splitByColon = split(':');

const toString = (number: number) => number.toString();

export { splitByColon, toString };
