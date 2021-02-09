import React from 'react';
import { roundToTwoDecimals } from '../helpers/helpers';
import styles from './Log.module.css';

interface LogProps {
  logs: string[];
  maxLogs: number;
}

const MIN_OPACITY = 0.15;
const FADE_COUNT = 3;

function Log(props: LogProps) {
  const {logs, maxLogs} = props;

  const fadeCount = Math.min(maxLogs, FADE_COUNT);
  const increasePercent = Math.pow(2, 1 / fadeCount) * Math.pow(MIN_OPACITY + 1, -1 / fadeCount);
  const currentFadeCount = logs.length + fadeCount - maxLogs;
  const fadeCountOffset = fadeCount - currentFadeCount;

  const calcOpacity = (i: number): number =>  roundToTwoDecimals((1 + MIN_OPACITY) * Math.pow(increasePercent, i + fadeCountOffset) - 1);

  const getOpacity = (i: number): number | '' => (i >= currentFadeCount) ? '' : calcOpacity(i);

  const logElements = logs.map((l: string, i: number) => <div key={`${i}-log`} className={styles.log} style={{opacity: getOpacity(i)}}>{l}</div>).reverse();

  return <div>{logElements}</div>
}

export default Log;