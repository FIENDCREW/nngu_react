import React, { useState } from 'react';
import style from './SeveBtn.module.scss';

const SeveBtn = () => {
  const [value, setValue] = useState('text');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event?.target.value);
  };
  return (
    <div className={style.seve_btn}>
      <input
        type="text"
        name=""
        id=""
        className={style.seve_btn_in}
        value={value}
        onChange={handleChange}
      />
      <button type="button" className={style.button}>
        Сохранить
      </button>
    </div>
  );
};

export default SeveBtn;
