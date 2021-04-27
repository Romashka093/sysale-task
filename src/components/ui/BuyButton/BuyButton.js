import React from 'react';
import css from './BuyButton.module.css';

function BuyButton({ title, submit, id }) {
  return (
    <>
      <button onClick={submit} id={id} className={css.buyButton} type="submit">
        {title}
      </button>
    </>
  );
}

export default BuyButton;
