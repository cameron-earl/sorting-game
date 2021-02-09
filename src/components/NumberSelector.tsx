import React from 'react';
import { puzzle } from '../helpers/puzzle';
import styles from './NumberSelector.module.css';

interface NumberSelectorProps {
  numArr: puzzle;
  reverseUpTo: (i: number) => void;
  tryCount: number;
  goodMoves: number[];
}

function NumberSelector(props: NumberSelectorProps) {
  const {numArr, reverseUpTo, tryCount, goodMoves} = props;

  const numbers = numArr.map((n: number, i: number) => (
    <button className={goodMoves.includes(i) ? styles.goodMove : ''} onClick={() => reverseUpTo(i)} key={`${i}-numberSelector`}>{n}</button>
  ));

  return <div className={styles.numberSelectorContainer}>Attempt {tryCount}: {numbers}</div>
}

export default NumberSelector;