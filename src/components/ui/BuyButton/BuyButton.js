import React from 'react';
import css from './BuyButton.module.css';

function BuyButton({ title, isBought }) {
  return (
    <>
      <button className={css.buyButton} type="submit" disabled={isBought}>
        {title}
      </button>
    </>
  );
}

export default BuyButton;
