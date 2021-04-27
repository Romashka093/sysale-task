import React, { Component } from 'react';
import language from '../../../language';
import css from './RadioButtons.module.css';

class RadioButtons extends Component {
  state = {
    sizeValue: '100',
  };
  handlerChangeSize = evt => {
    const { value, name } = evt.target;
    this.setState({ [name]: value });
    this.props.changeProductSize(value);
  };
  render() {
    const { arr } = this.props;
    const { sizeValue } = this.state;
    return (
      <>
        <ul>
          {arr !== null &&
            arr.map(item => (
              <li
                key={`size${item}`}
                onChange={this.handlerChangeSize}
                className={css.btnWrap}
              >
                <input
                  onChange={this.handlerChangeSize}
                  type="radio"
                  name="sizeValue"
                  value={item}
                  id={`size${item}`}
                  defaultChecked={item === sizeValue}
                />
                <label className={css.btnName} htmlFor={`size${item}`}>
                  {item} {language.ru.ml}
                </label>
              </li>
            ))}
        </ul>
      </>
    );
  }
}

export default RadioButtons;
