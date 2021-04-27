/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import language from '../../../language';
import css from './ColorSelector.module.css';

function ColorSelector({
  handlerChangeColor,
  handlerToggleColorSelector,
  isColorSelector,
  productColor,
}) {
  return (
    <>
      <div onClick={handlerToggleColorSelector} className={css.dropDown}>
        <button className={!isColorSelector ? css.dropBtn : css.dropBtnActive}>
          {productColor}
        </button>
        <span className={!isColorSelector ? css.pathDown : css.pathUp}></span>
        <div
          id="myDropdown"
          className={!isColorSelector ? css.dropDownContent : css.isShow}
        >
          <ul>
            <li onClick={handlerChangeColor}>
              <a href="#" name={language.ru.yellow}>
                {language.ru.yellow}
              </a>
            </li>
            <li onClick={handlerChangeColor}>
              <a href="#" name={language.ru.red}>
                {language.ru.red}
              </a>
            </li>
            <li onClick={handlerChangeColor}>
              <a href="#" name={language.ru.green}>
                {language.ru.green}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ColorSelector;
