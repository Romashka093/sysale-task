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
    isBought: true,
    isColorSelector: false,
    sizeValue: '100',
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
    if (prevState.amountProducts !== amountProducts)
      this.changePriceWithAmount(amountProducts, defaultPrice);

    if (prevState.sizeValue !== sizeValue) this.changePriceWithSize(+sizeValue);
    if (prevState.defaultPrice !== defaultPrice) {
      this.changePriceWithSize(+sizeValue);
      this.changePriceWithAmount(amountProducts, defaultPrice);
    }
  }

  changePriceWithSize = size => {
    const { defaultPrice, amountProducts } = this.state;
    this.setState({
      defaultPrice: size,
    });
    if (size === 100) {
      this.setState({
        totalPrice: defaultPrice * amountProducts,
      });
    }
    if (size === 200) {
      this.setState({
        totalPrice: defaultPrice * 2 * amountProducts,
      });
    }
    if (size === 300) {
      this.setState({
        totalPrice: defaultPrice * 3 * amountProducts,
      });
    }
  };

  changePriceWithAmount = (amount, price) => {
    this.setState({
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

  formHandlerSubmit = evt => {
    evt.preventDefault();
    this.setState({ productId: evt.target.id, isBought: !this.state.isBought });
  };

  render() {
    const {
      isBought,
      isColorSelector,
      amountProducts,
      productColor,
      totalPrice,
    } = this.state;
    const { product } = this.props;
    const { id, name, picture, focusPicture, about, size } = product;

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
                isColorSelector={isColorSelector}
                handlerToggleColorSelector={this.handlerToggleColorSelector}
                handlerChangeColor={this.handlerChangeColor}
                productColor={productColor}
              />
              <div>
                {totalPrice} {language.ru.uah}.
              </div>
            </div>
            <RadioButtons
              arr={size}
              changeProductSize={this.changeProductSize}
              //   sizeValue={sizeValue}
            />
            <div className={css.productFooter}>
              <QuantitySelector
                amount={amountProducts}
                add={this.handlerAddAmount}
                remove={this.handlerRemoveAmount}
              />
              <BuyButton
                submit={this.formHandlerSubmit}
                title={language.ru.buy}
                id={id}
              />
            </div>
          </form>
        </li>
      </>
    );
  }
}

export default ProductItem;
