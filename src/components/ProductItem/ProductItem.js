import React, { Component } from 'react';
import language from '../../language';
import FlagNew from '../ui/FlagNew/FlagNew';
import Balance from '../ui/Balance/Balance';
import Product from '../ui/Product/Product';
import ColorSelector from '../ui/ColorSelector/ColorSelector';
import RadioButtons from '../ui/RadioButtons/RadioButtons';
import QuantitySelector from '../ui/QuantitySelector/QuantitySelector';
import BuyButton from '../ui/BuyButton/BuyButton';
import css from './ProductItem.module.css';

class ProductItem extends Component {
  state = {
    isBought: false,
    isColorSelector: false,
    isFocusedOnImg: false,
    sizeValue: 100,
    amountProducts: 1,
    productColor: language.ru.color,
    defaultPrice: 200,
    totalPrice: 0,
    productId: null,
  };

  componentDidMount() {
    const { defaultPrice, amountProducts } = this.state;
    this.setState({
      totalPrice: defaultPrice * amountProducts,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { amountProducts, sizeValue, defaultPrice } = this.state;
    if (prevState.amountProducts !== amountProducts) {
      this.changePriceWithAmount(amountProducts, defaultPrice);
    }
    if (prevState.sizeValue !== sizeValue) {
      this.changePriceWithSize(+sizeValue);
    }
    if (prevState.defaultPrice !== defaultPrice) {
      this.changePriceWithSize(+sizeValue);
    }
  }

  changePriceWithSize = size => {
    const { defaultPrice, amountProducts } = this.state;
    if (size === 100) {
      this.setState({
        defaultPrice: 200,
        totalPrice: defaultPrice * amountProducts,
      });
    }
    if (size === 200)
      this.setState({
        defaultPrice: 400,
        totalPrice: defaultPrice * amountProducts,
      });
    if (size === 300)
      this.setState({
        defaultPrice: 600,
        totalPrice: defaultPrice * amountProducts,
      });
  };

  changePriceWithAmount = (amount, price) => {
    this.setState({
      amountProducts: amount,
      totalPrice: price * amount,
    });
  };

  handlerChangeColor = evt => {
    evt.preventDefault();
    const { name } = evt.target;
    this.setState({
      productColor: name,
    });
  };

  handlerToggleColorSelector = evt => {
    evt.preventDefault();
    this.setState({
      isColorSelector: !this.state.isColorSelector,
    });
  };

  changeProductSize = value => {
    this.setState({ sizeValue: value });
  };

  handlerAddAmount = evt => {
    evt.preventDefault();
    if (this.state.amountProducts < 10) {
      this.setState({
        amountProducts: this.state.amountProducts + 1,
      });
    }
  };

  handlerRemoveAmount = evt => {
    evt.preventDefault();
    if (this.state.amountProducts > 1)
      this.setState({
        amountProducts: this.state.amountProducts - 1,
      });
  };

  formHandlerSubmit = evt => {
    evt.preventDefault();
    this.setState({ productId: evt.target.id, isBought: !this.state.isBought });
  };

  handelFocused = evt => {
    evt.preventDefault();
    this.setState({ isFocusedOnImg: !this.state.isFocusedOnImg });
  };

  render() {
    const {
      isBought,
      isColorSelector,
      amountProducts,
      productColor,
      totalPrice,
      isFocusedOnImg,
    } = this.state;
    const { product } = this.props;
    const { id, name, picture, focusPicture, about } = product;

    return (
      <>
        <li className={css.productItemWrap}>
          <form
            className={css.productItemForm}
            action=""
            method="POST"
            onSubmit={this.formHandlerSubmit}
            id={id}
          >
            <div className={css.productHeader}>
              <FlagNew title={language.ru.new} />

              <Balance isBought={isBought} />
            </div>
            <Product
              name={name}
              picture={picture}
              focusPicture={focusPicture}
              about={about}
              handelFocused={this.handelFocused}
              isFocusedOnImg={isFocusedOnImg}
            />
            <div className={css.productColor}>
              <ColorSelector
                id={id}
                isColorSelector={isColorSelector}
                handlerToggleColorSelector={this.handlerToggleColorSelector}
                handlerChangeColor={this.handlerChangeColor}
                productColor={productColor}
              />
              <div>
                {totalPrice} {language.ru.uah}.
              </div>
            </div>
            <RadioButtons changeProductSize={this.changeProductSize} />
            <div className={css.productFooter}>
              <QuantitySelector
                amount={amountProducts}
                add={this.handlerAddAmount}
                remove={this.handlerRemoveAmount}
              />
              <BuyButton title={language.ru.buy} isBought={isBought} />
            </div>
          </form>
        </li>
      </>
    );
  }
}

export default ProductItem;
