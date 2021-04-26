import React from 'react';
import language from '../../../language';
import css from './RadioButtons.module.css';

function RadioButtons({ arr, handlerChangeSize, sizeValue }) {
  return (
    <>
      <ul>
        {arr !== null &&
          arr.map(item => (
            <li key={`size${item}`} onChange={handlerChangeSize}>
              <input
                onChange={handlerChangeSize}
                type="radio"
                name="size"
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

export default RadioButtons;
