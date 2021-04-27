import React from 'react';
import { products } from '../../helpers/data/products.js';
import ProductItem from '../../components/ProductItem/ProductItem';
import css from './ItemList.module.css';

function ItemList() {
  return (
    <>
      <ul className={css.productsContainer}>
        {products.map(product => (
          <ProductItem product={product} key={product.id} />
        ))}
      </ul>
    </>
  );
}

export default ItemList;
