import classNames from 'classnames';
import React from 'react';

import styles from './NumberButton.module.css';

interface NumberButtonProps {
  color: string;
  children: number;
  goodMove: boolean;
  disabled: boolean;
  onClick: () => void;
}

function NumberButton(props: NumberButtonProps) {
  const { color, children, goodMove, disabled, onClick } = props;

  const btnClass = classNames({ [styles.goodMove]: goodMove }, styles.numberButton);

  return (
    <button
      onClick={onClick}
      className={btnClass}
      style={{ backgroundColor: color, borderColor: color }}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default NumberButton;
