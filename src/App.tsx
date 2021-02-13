import './App.css';

import useEventListener from '@use-it/event-listener';
import debounce from 'lodash.debounce';
import React, { ChangeEvent, useEffect, useState } from 'react';

import Log from './components/Log';
import NumberSelector from './components/NumberSelector';
import { isSorted, randElement, reverseUpTo, shuffle } from './helpers/helpers';
import { puzzle } from './helpers/puzzle';
import { getHints, solver } from './helpers/solver';

const START_MESSAGE =
  'Your goal is to sort the list. Click a number, and all numbers from the beginning to that point will be reversed. How many turns will it take?';

const getShuffledNumbers = (): puzzle => shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]) as puzzle;

const doTheThing = debounce((fn, value) => {
  fn(value);
}, 100);

function App() {
  const [logs, setLogs] = useState<string[]>([START_MESSAGE]);
  const [numArr, setNumArr] = useState<puzzle>(getShuffledNumbers());
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

  const reset = () => {
    setWinCount(winCount + 1);
    const newPuzzle = getShuffledNumbers();
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

  const logSolution = () => {
    console.log(solver(numArr));
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
      <input type="color" onChange={handleColorChange} value={startColor} name="start" /> {startColor}
      <input type="color" onChange={handleColorChange} value={endColor} name="end" /> {endColor}
      <button onClick={reset}>{numbersSorted ? 'New Game' : 'Reset'}</button>
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
