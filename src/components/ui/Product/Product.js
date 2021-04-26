import React from 'react';
import css from './Product.module.css';

function Product({ name, picture, focusPicture, about }) {
  return (
    <>
      <div className={css.productWrap}>
        <img
          className={css.productImg}
          src={true ? picture.default : focusPicture.default}
          alt={name}
        />
        <h3 className={css.productName}>{name}</h3>
        <p className={css.productDescription}>{about}</p>
      </div>
    </>
  );
}

export default Product;
