import React, { useState } from 'react';
import Result from './result';
import Key from './key';
import './Calculator.module.css';

const Calculator = () => {
  const [items, setItems] = useState({ total: null, next: null, operation: null });

  const handleClick = (obj) => {
    setItems({ total: obj.total, next: obj.next, operation: obj.operation });
  };

  return (
    <div className="calc grid-container">
      <Result className="item1 top" Result={items} />

      <Key css="item2" buttonName="AC" Result={items} handleClick={handleClick} />
      <Key css="item3" buttonName="+/-" Result={items} handleClick={handleClick} />
      <Key css="item4" buttonName="%" Result={items} handleClick={handleClick} />
      <Key css="item5 right" buttonName="÷" Result={items} handleClick={handleClick} />

      <Key css="item6" buttonName="7" Result={items} handleClick={handleClick} />
      <Key css="item7" buttonName="8" Result={items} handleClick={handleClick} />
      <Key css="item8" buttonName="9" Result={items} handleClick={handleClick} />
      <Key css="item9 right" buttonName="x" Result={items} handleClick={handleClick} />

      <Key css="item10" buttonName="4" Result={items} handleClick={handleClick} />
      <Key css="item11" buttonName="5" Result={items} handleClick={handleClick} />
      <Key css="item12" buttonName="6" Result={items} handleClick={handleClick} />
      <Key css="item13 right" buttonName="-" Result={items} handleClick={handleClick} />

      <Key css="item14" buttonName="1" Result={items} handleClick={handleClick} />
      <Key css="item15" buttonName="2" Result={items} handleClick={handleClick} />
      <Key css="item16" buttonName="3" Result={items} handleClick={handleClick} />
      <Key css="item17 right" buttonName="+" Result={items} handleClick={handleClick} />

      <Key css="item18" buttonName="0" Result={items} handleClick={handleClick} />
      <Key css="item19" buttonName="." Result={items} handleClick={handleClick} />
      <Key css="item20 right" buttonName="=" Result={items} handleClick={handleClick} />
    </div>
  );
};

export default Calculator;
