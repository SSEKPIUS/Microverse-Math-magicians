import React from 'react';
import styles from './Calculate.module.css';
import Calculator from './Calculator';

const Calculate = () => (
  <div className={styles.calculator}>
    <div>
      <span>Let&apos;s do some maths!</span>
    </div>
    <div>
      <Calculator />
    </div>
  </div>
);

export default Calculate;
