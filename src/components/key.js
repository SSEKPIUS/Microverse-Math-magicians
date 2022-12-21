import React from 'react';
import calculate from '../logic/calculate';

const key = ({
  handleClick, Result, buttonName, css,
}) => {
  const onClick = () => handleClick(calculate(Result, buttonName));

  return (
    <div
      className={css}
      onClick={onClick}
      aria-hidden="true"
    >
      {buttonName}
    </div>
  );
};
export default key;
