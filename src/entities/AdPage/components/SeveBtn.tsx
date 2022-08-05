import React, { useState } from 'react';
import style from './SeveBtn.module.scss';

const SeveBtn = ({ value }) => {
  return (
    <div className={style.seve_btn}>
      <div className={style.seve_btn_in}>
        {value}
      </div>
      <button type="button" className={style.button}>
        Сохранить
      </button>
    </div>
  );
};

export default SeveBtn;
