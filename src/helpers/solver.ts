import { getSortedNumArray, isObjectEmpty, isSorted, reverse, reverseUpTo, reverseUpToEfficient, timeFn } from './helpers';

type permutation = [number[], number[]];
const solutionMapByLen: {[key: string]: number[]}[] = [];

function populateEasySolutionMap(len: number = 5) {
  if (!solutionMapByLen[len]) {
    solutionMapByLen[len] = {}
  } else {
    if (!isSolutionMapEmpty(len)) return;
  }
  const solutionMap = solutionMapByLen[len];
  console.time(`populateEasySolutionMap-${len}`);
  const sorted: number[] = getSortedNumArray(len);
  solutionMap[sorted.join('')] = [];
  const permutations: permutation[] = [[sorted, []]];
  for (let i = 0; i < permutations.length/* && permutations[i][1].length < 7 */; i++) {
    for (let j = 1; j < sorted.length; j++) {
      const newArr = reverseUpToEfficient(permutations[i][0], j);
      const str = newArr.join('');
      if (solutionMap[str]) continue;
      const steps = [...permutations[i][1], j];
      permutations.push([newArr, steps]);
      solutionMap[str] = steps;
    }
  }
  console.timeEnd(`populateEasySolutionMap-${len}`);
};

window.setTimeout(populateEasySolutionMap, 0);

export const solver = (arr: number[]): number[] => {
  console.log('solver');
  if (timeFn(isSolutionMapEmpty, arr.length)) {
    populateEasySolutionMap(arr.length);
  }
  const solutionMap = solutionMapByLen[arr.length];

  let solution: number[] | null = null;
  const permutations: permutation[] = [[arr, []]];
  const str = arr.join('');
  if (solutionMap[str]) {
    solution = reverse(solutionMap[str]);
  } else {
    const permutationsMap: {[key: string]: number[]} = {[arr.join('')]: []};
    for (let i = 0; !solution && i < permutations.length && i < 1_000_000; i++) {
      for (let j = 1; !solution && j < arr.length; j++) {
        const newArr = reverseUpTo(permutations[i][0], j);
        const str = newArr.join('');
        if (permutationsMap[str]) continue;
        const steps = [...permutations[i][1], j];
        if (solutionMap[str]) {
          solution = [...steps, ...reverse(solutionMap[str])];
        } else if (isSorted(newArr)) {
          solution = steps;
          break;
        }

        permutations.push([newArr, steps]);
        permutationsMap[str] = steps;
      }
    }
  }
    
  if (solution) {
    return solution;
  }
  throw new Error('Solver failed for ' + arr);
}

export const getHints = (arr: number[]): {solution: number[], goodMoves: number[]} => {
  const solution = solver(arr);
  const goodMoves: number[] = [];
  for (let i = 1; i < arr.length; i++) {
    if (solution[0] === i) {
      goodMoves.push(i);
      continue;
    }
    const newArr = reverseUpTo(arr, i);
    const newSolution = solver(newArr);
    if (newSolution.length < solution.length) goodMoves.push(i);
  }
  return {solution, goodMoves};
}

const isSolutionMapEmpty = (len: number) => {
  const sortedKey = getSortedNumArray(len).join('');
  return !solutionMapByLen[len] || !solutionMapByLen[len][sortedKey];
}