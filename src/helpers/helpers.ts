import SillyGooseError from './SillyGooseError';

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
export const shuffle = <T>(array: T[]): T[] => {
  const arr = [...array];
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

export const toFixedNumber = (num: number, digits: number): number => {
  var pow = Math.pow(10, digits);
  return Math.round(num*pow) / pow;
}

export const roundToTwoDecimals = (n: number) => Math.round(n * 100) / 100;

export const isSorted = (arr: number[]): boolean => arr.every((e, i) => e === i+1);

export const reverseUpTo = (arr: number[], i: number): number[] => [...arr.slice(0, i+1).reverse(), ...arr.slice(i+1)];

export const reverseUpToEfficient = (arr: number[], idx: number): number[] => {
  const newArr = [];
  for (let i = idx; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  for (let i = idx + 1; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}

export const reverse = <T>(array: T[]): T[] => array.slice().reverse();

export const isObjectEmpty = (obj: Object) => {
  console.count('isObjectEmpty');
  for(var i in obj) return false; 
  return true;
}

export const randInt = (min: number = 0, max: number = 9): number => {
  if (max < min) throw new SillyGooseError('Max cannot be less than min, you silly goose.');
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const randElement = <T>(a: T[]): T => a[randInt(0, a.length - 1)];

export const getSortedNumArray = (len: number): number[] => new Array(len).fill(0).map((n, i) => i + 1);

export const getShuffledNumArray = (len: number): number[] => {
  let arr: number[];
  do {
    arr = shuffle(getSortedNumArray(len));
  } while (isSorted(arr))

  return arr;
}

export const timeFn = (fn: Function, ...args: any[]): any => {
  console.time(fn.name);
  const result = fn(...args);
  console.timeEnd(fn.name);
  return result;
}
