import { puzzle } from './puzzle';
import { solver } from './solver';

describe('solver', () => {
  it('should return empty array for sorted puzzle', () => {
    const arr: puzzle = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const expected: number[] = [];

    expect(solver(arr)).toEqual(expected);
  });

  it('should return [8] for reversed array', () => {
    const arr: puzzle = [9,8,7,6,5,4,3,2,1];

    const expected: number[] = [8];

    expect(solver(arr)).toEqual(expected);
  });

  it('should return [8, 1] for [9,8,7,6,5,4,3,1,2]', () => {
    const arr: puzzle = [9,8,7,6,5,4,3,1,2];

    const expected: number[] = [8, 1];

    expect(solver(arr)).toEqual(expected);
  });

  it('should return [7, 6] for [8,1,2,3,4,5,6,7,9]', () => {
    const arr: puzzle = [8,1,2,3,4,5,6,7,9];

    const expected: number[] = [7,6];

    expect(solver(arr)).toEqual(expected);
  });
})