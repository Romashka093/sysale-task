import React from 'react';
import css from './QuantitySelector.module.css';

function QuantitySelector({ amount, add, remove }) {
  return (
    <div className={css.wrap}>
      <button onClick={remove} className={css.btnMinus}>
        <svg
          width="8"
          height="1"
          viewBox="0 0 8 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-0.000183105 0.999969V-3.05176e-05H7.99982V0.999969H-0.000183105Z"
            fill="#2C2C2C"
          />
        </svg>
      </button>
      <span className={css.inputQuantity}>{amount}</span>
      <button onClick={add} className={css.btnPlus}>
        <svg
          width="8"
          height="9"
          viewBox="0 0 8 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.60138 8.33591H3.33575V4.75778H-0.000183105V3.49216H3.33575V-3.05176e-05H4.60138V3.49216H7.93732V4.75778H4.60138V8.33591Z"
            fill="#2C2C2C"
          />
        </svg>
      </button>
    </div>
  );
}

export default QuantitySelector;
