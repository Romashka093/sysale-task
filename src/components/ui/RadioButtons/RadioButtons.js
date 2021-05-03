import React, { Component } from 'react';
import language from '../../../language';
import css from './RadioButtons.module.css';

const Size = {
  ONE_HUNDRED: 100,
  TWO_HUNDRED: 200,
  THREE_HUNDRED: 300,
};
console.log(Size);
class RadioButtons extends Component {
  state = {
    sizeValue: 100,
  };
  handlerChangeSize = evt => {
    const { value, name } = evt.target;
    this.setState({ [name]: value });
    this.props.changeProductSize(value);
  };
  render() {
    const { sizeValue } = this.state;
    return (
      <>
        <ul>
          <li key={`size${Size.ONE_HUNDRED}`} className={css.btnWrap}>
            <input
              type="radio"
              defaultChecked={sizeValue === Size.ONE_HUNDRED}
              name="sizeValue"
              onChange={this.handlerChangeSize}
              value={Size.ONE_HUNDRED}
            />
            <label className={css.btnName} htmlFor={`size${Size.ONE_HUNDRED}`}>
              {Size.ONE_HUNDRED} {language.ru.ml}
            </label>
          </li>
          <li key={`size${Size.TWO_HUNDRED}`} className={css.btnWrap}>
            <input
              type="radio"
              defaultChecked={sizeValue === Size.TWO_HUNDRED}
              name="sizeValue"
              onChange={this.handlerChangeSize}
              value={Size.TWO_HUNDRED}
            />
            <label className={css.btnName} htmlFor={`size${Size.TWO_HUNDRED}`}>
              {Size.TWO_HUNDRED} {language.ru.ml}
            </label>
          </li>
          <li key={`size${Size.THREE_HUNDRED}`} className={css.btnWrap}>
            <input
              type="radio"
              defaultChecked={sizeValue === Size.THREE_HUNDRED}
              name="sizeValue"
              onChange={this.handlerChangeSize}
              value={Size.THREE_HUNDRED}
            />
            <label
              className={css.btnName}
              htmlFor={`size${Size.THREE_HUNDRED}`}
            >
              {Size.THREE_HUNDRED} {language.ru.ml}
            </label>
          </li>
        </ul>
      </>
    );
  }
}

export default RadioButtons;
