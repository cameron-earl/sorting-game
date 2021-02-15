import SillyGooseError from './SillyGooseError';

export const colorBlend = (start: string, end: string, percent: number) => {
  if (!isHex(start) || !isHex(end)) {
    throw new SillyGooseError(
      `Why are you sending things like "${start}" and "${end}" to a function that requires hex color values?`
    );
  }

  const rgbStart = hexColorToNumArr(start);
  const rgbEnd = hexColorToNumArr(end);

  const blend = [0, 1, 2].map((i) => midPoint(rgbStart[i], rgbEnd[i], percent));
  return '#' + blend.map(decToHex).join('');
};

export const isHex = (str: string): boolean => {
  const hexRegex = /^#[a-fA-F0-9]{6}$/;
  return hexRegex.test(str);
};

export const hexToDec = (str: string): number => {
  return parseInt(str, 16);
};

export const decToHex = (n: number): string => {
  return n.toString(16).padStart(2, '0');
};

export const hexColorToNumArr = (str: string) => {
  const r = str.slice(1, 3);
  const g = str.slice(3, 5);
  const b = str.slice(5);

  return [r, g, b].map(hexToDec);
};

export const midPoint = (a: number, b: number, percent: number) => {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  const perc = a > b ? 1 - percent : percent;

  return Math.floor((max - min) * perc + min);
};
