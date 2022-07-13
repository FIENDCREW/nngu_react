import React from 'react';
import style from './SeveBtn.module.scss';

const SeveBtn = () => {
  return (
    <div className={style.seve_btn}>
      <input type="text" name="" id="" className={style.seve_btn_in} />
      <button type="button" className={style.button}>
        Сохранить
      </button>
    </div>
  );
};

export default SeveBtn;
