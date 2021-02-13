import React from 'react';

import { colorBlend } from '../helpers/colorBlend';
import { puzzle } from '../helpers/puzzle';
import NumberButton from './NumberButton';
import styles from './NumberSelector.module.css';

interface NumberSelectorProps {
  numArr: puzzle;
  reverseUpTo: (i: number) => void;
  tryCount: number;
  goodMoves: number[];
  startColor: string;
  endColor: string;
}

function NumberSelector(props: NumberSelectorProps) {
  const { numArr, reverseUpTo, tryCount, goodMoves, startColor, endColor } = props;

  const numbers = numArr.map((n: number, i: number) => (
    <NumberButton
      disabled={i === 0 || !goodMoves.length}
      color={colorBlend(startColor, endColor, (n - 1) / (numArr.length - 1))}
      goodMove={goodMoves.includes(i)}
      onClick={() => reverseUpTo(i)}
      key={`${i}-numberSelector`}
    >
      {n}
    </NumberButton>
  ));

  return (
    <div className={styles.numberSelectorContainer}>
      Attempt {tryCount}: {numbers}
    </div>
  );
}

export default NumberSelector;
