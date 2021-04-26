import React from 'react';
import css from './BuyButton.module.css';

function BuyButton({ title }) {
  return (
    <>
      <button className={css.buyButton} type="submit">
        {title}
      </button>
    </>
  );
}

export default BuyButton;
