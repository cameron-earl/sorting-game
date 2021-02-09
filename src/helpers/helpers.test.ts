import { reverse } from 'dns';
import { reverseUpTo } from './helpers';
import { puzzle } from './puzzle';

describe('reverseUpTo', () => {
  it('should reverse an array given 8', () => {
    const arr: puzzle = [1,2,3,4,5,6,7,8,9];
    const expected: puzzle = [9,8,7,6,5,4,3,2,1];
    const actual = reverseUpTo(arr, 8);
    expect(actual).toEqual(expected);
    expect(actual).not.toEqual(arr);
  });

  it('should reverse part an array given 2', () => {
    const arr: puzzle = [1,2,3,4,5,6,7,8,9];
    const expected: puzzle = [3,2,1,4,5,6,7,8,9];
    const actual = reverseUpTo(arr, 2);
    expect(actual).toEqual(expected);
    expect(actual).not.toEqual(arr);
  });

  it('should not mutate the original array', () => {
    const original: puzzle = [1,2,3,4,5,6,7,8,9];
    const originalString = original.toString();
    const result = reverseUpTo(original, 5);
    
    expect(original.toString()).toEqual(originalString);
  });
})