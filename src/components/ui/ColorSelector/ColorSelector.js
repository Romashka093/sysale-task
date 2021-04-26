import React from 'react';
import language from '../../../language';
import css from './ColorSelector.module.css';

function ColorSelector({ handlerChangeColor, id, isFocusedOnColorSelector }) {
  return (
    <div className={css.colorSelectorWrap}>
      <input
        className={css.colorInput}
        type="text"
        id={`colorChoose${id}`}
        placeholder={language.ru.color}
        name="colors"
        list="colors"
      />
      <span
        className={
          isFocusedOnColorSelector ? css.inputIconActive : css.inputIcon
        }
      ></span>

      <datalist className={css.listColors} id="colors">
        <option className={css.colorItem} value={language.ru.yellow}></option>
        <option className={css.colorItem} value={language.ru.red}></option>
        <option className={css.colorItem} value={language.ru.green}></option>
        {/* <option className={css.colorItem} value={language.ru.orange}></option> */}
        {/* <option className={css.colorItem} value={language.ru.paleBlue}></option> */}
        {/* <option className={css.colorItem} value={language.ru.blue}></option> */}
        {/* <option className={css.colorItem} value={language.ru.purple}></option> */}
      </datalist>
    </div>
  );
}

export default ColorSelector;
