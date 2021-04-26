import React from 'react';
import css from './FlagNew.module.css';

function FlagNew({ title }) {
  return (
    <div className={css.flagWrap}>
      <p className={css.flagContent}>{title}</p>
    </div>
  );
}

export default FlagNew;
