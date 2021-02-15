import './App.css';

import useEventListener from '@use-it/event-listener';
import debounce from 'lodash.debounce';
import React, { ChangeEvent, useEffect, useState } from 'react';

import Log from './components/Log';
import NumberSelector from './components/NumberSelector';
import { getShuffledNumArray, isSorted, randElement, reverseUpTo, shuffle } from './helpers/helpers';
import { getHints, solver } from './helpers/solver';

const START_MESSAGE =
  'Your goal is to sort the list. Click a number, and all numbers from the beginning to that point will be reversed. How many turns will it take?';

const getNewPuzzle = (level: number) => getShuffledNumArray(level + 4);
const doTheThing = debounce((fn, value) => {
  fn(value);
}, 100);

function App() {
  const [level, setLevel] = useState(6);
  const [logs, setLogs] = useState<string[]>([START_MESSAGE]);
  const [numArr, setNumArr] = useState<number[]>(getNewPuzzle(level));
  const [winCount, setWinCount] = useState(0);
  const [turns, setTurns] = useState(0);
  const [maxLogs, setMaxLogs] = useState(25);
  const [perfect, setPerfect] = useState(solver(numArr).length);
  const [startColor, setStartColor] = useState('#bc15a0');
  const [endColor, setEndColor] = useState('#5fdbdd');

  const numbersSorted = isSorted(numArr);

  const { solution, goodMoves } = getHints(numArr);

  const addLog = (s: string) => {
    setLogs([...logs, s].slice(-1 * maxLogs));
  };

  const incrementLevel = (levelChange: number): number => {
    if (!levelChange) return level;
    const newLevel = Math.max(1, level + levelChange);
    setLevel(newLevel);
    return newLevel;
  }

  const reset = (levelChange: number = 0) => {
    const newLevel = incrementLevel(levelChange);
    setWinCount(winCount + 1);
    const newPuzzle = getNewPuzzle(newLevel);
    console.log(newPuzzle, newLevel);
    setNumArr(newPuzzle);
    setTurns(0);
    const newPerfect = solver(newPuzzle).length;
    setPerfect(newPerfect);
    addLog(`Game ${winCount + 2}: Good luck! The best strategy solves this in ${newPerfect} steps.`);
  };

  const handleReverseUpTo = (i: number): void => {
    if (i === 0) return;
    const newArr = reverseUpTo(numArr, i);

    addLog(
      `Attempt ${turns + 1}: ${numArr.join(', ')} - flip ${i + 1}` + (goodMoves.includes(i) ? ' (Good move!)' : '')
    );
    setNumArr(newArr);
    setTurns(turns + 1);
  };

  function handleKeyDown(ev: KeyboardEvent) {
    if (!/^\d$/.test(ev.key)) return;
    handleReverseUpTo(Number(ev.key));
  }

  const handleVictory = () => {
    const overage = turns - perfect;
    let message;
    if (overage === 0) {
      message = `🎉🥳🎈PERFECT GAME!🎈🥳🎉`;
    } else if (overage <= 2) {
      message = `Nearly flawless!`;
    } else if (overage <= 5) {
      message = `Well done! You finished in ${overage} moves over par.`;
    } else {
      message = `Ouch! You went ${overage} moves over par. Better luck next time.`;
    }
    const invites = ['Go again?', 'Another game?', 'Try another?', 'One more time?', 'Hit that New Game button!'];
    addLog(`${message} ${randElement(invites)}`);
  };

  const handleColorChange = ({ target: { value, name } }: ChangeEvent<HTMLInputElement>) => {
    const onChangeComplete = name === 'start' ? setStartColor : setEndColor;
    doTheThing(onChangeComplete, value);
  };

  useEventListener('keydown', (ev: Event) => handleKeyDown(ev as KeyboardEvent));

  useEffect(() => {
    if (numbersSorted) handleVictory();
  }, [numArr, numbersSorted]);

  return (
    <div className="App">
      <button onClick={() => reset(-1)} disabled={level === 1}>-1</button>
      <button onClick={() => reset()}>{numbersSorted ? 'New Game' : 'Reset'}</button>
      <button onClick={() => reset(1)}>+1</button>
      <input type="color" onChange={handleColorChange} value={startColor} name="start" /> {startColor}
      <input type="color" onChange={handleColorChange} value={endColor} name="end" /> {endColor}
      <br></br>
      <br></br>
      <NumberSelector
        startColor={startColor}
        endColor={endColor}
        numArr={numArr}
        reverseUpTo={handleReverseUpTo}
        tryCount={turns + 1}
        goodMoves={goodMoves}
      ></NumberSelector>
      <Log logs={logs} maxLogs={maxLogs}></Log>
    </div>
  );
}

export default App;
