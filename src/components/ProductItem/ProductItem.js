import React, { Component } from 'react';
import language from '../../language';
import Balance from '../ui/Balance/Balance';
import BuyButton from '../ui/BuyButton/BuyButton';
import ColorSelector from '../ui/ColorSelector/ColorSelector';
import FlagNew from '../ui/FlagNew/FlagNew';
import Product from '../ui/Product/Product';
import QuantitySelector from '../ui/QuantitySelector/QuantitySelector';
import RadioButtons from '../ui/RadioButtons/RadioButtons';
import css from './ProductItem.module.css';

class ProductItem extends Component {
  state = {
    isBought: false,
    isFocusedOnColorSelector: false,
    sizeValue: '100',
    amountProducts: 1,
  };

  handlerChangeSize = evt => {
    const { value } = evt.target;
    this.setState({ sizeValue: value });
    console.log(value);
  };
  handlerAddAmount = evt => {
    evt.preventDefault();
    this.setState({
      amountProducts: this.state.amountProducts + 1,
    });
  };
  handlerRemoveAmount = evt => {
    evt.preventDefault();
    const { amountProducts } = this.state;
    if (amountProducts > 1)
      this.setState({
        amountProducts: amountProducts - 1,
      });
  };

  render() {
    const {
      isBought,
      isFocusedOnColorSelector,
      sizeValue,
      amountProducts,
    } = this.state;
    const { product } = this.props;
    const { id, name, picture, focusPicture, about, price, size } = product;
    console.log(sizeValue);
    return (
      <>
        <li className={css.productItemWrap}>
          <form action="" method="POST">
            <div className={css.productHeader}>
              <FlagNew title={language.ru.new} />

              <Balance isBought={isBought} />
            </div>
            <Product
              name={name}
              picture={picture}
              focusPicture={focusPicture}
              about={about}
            />
            <div className={css.productColor}>
              <ColorSelector
                id={id}
                isFocusedOnColorSelector={isFocusedOnColorSelector}
              />
              <div>
                {price} {language.ru.uah}.
              </div>
            </div>
            <RadioButtons
              arr={size}
              handlerChangeSize={this.handlerChangeSize}
              sizeValue={sizeValue}
            />
            <div className={css.productFooter}>
              <QuantitySelector
                amount={amountProducts}
                add={this.handlerAddAmount}
                remove={this.handlerRemoveAmount}
              />
              <BuyButton title={language.ru.buy} />
            </div>
          </form>
        </li>
      </>
    );
  }
}

export default ProductItem;
