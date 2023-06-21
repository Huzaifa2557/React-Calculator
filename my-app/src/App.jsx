import React, { useState } from 'react';

function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');

  const handleDigitClick = (digit) => {
    if (displayValue === '0') {
      setDisplayValue(digit);
    } else {
      setDisplayValue(displayValue + digit);
    }
  };

  const handleOperatorClick = (operator) => {
  };

  const handleEqualsClick = () => {
  };

  const handleClearClick = () => {
    setDisplayValue('0');
  };

  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="keypad">
        <div className="row">
          <button onClick={() => handleDigitClick('7')}>7</button>
          <button onClick={() => handleDigitClick('8')}>8</button>
          <button onClick={() => handleDigitClick('9')}>9</button>
          <button onClick={() => handleOperatorClick('/')}>/</button>
        </div>
        <div className="row">
          <button onClick={() => handleDigitClick('4')}>4</button>
          <button onClick={() => handleDigitClick('5')}>5</button>
          <button onClick={() => handleDigitClick('6')}>6</button>
          <button onClick={() => handleOperatorClick('*')}>*</button>
        </div>
        <div className="row">
          <button onClick={() => handleDigitClick('1')}>1</button>
          <button onClick={() => handleDigitClick('2')}>2</button>
          <button onClick={() => handleDigitClick('3')}>3</button>
          <button onClick={() => handleOperatorClick('-')}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleDigitClick('0')}>0</button>
          <button onClick={() => handleDigitClick('.')}>.</button>
          <button onClick={handleEqualsClick}>=</button>
          <button onClick={() => handleOperatorClick('+')}>+</button>
        </div>
        <div className="row">
          <button onClick={handleClearClick}>C</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
