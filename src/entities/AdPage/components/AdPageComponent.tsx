import React, { useState } from 'react';
import style from './AdPage.module.scss';
import BackupComponent from './BackupComponent';

const AdPageComponent = () => {
  const [value, setValue] = useState('text');
  function handleChange(event: { target: { value: React.SetStateAction<string> } }) {
    setValue(event.target.value);
  }
  const [textarea, setTextarea] = useState('');
  return (
    <>
      <BackupComponent />
      <div className={style.main_container}>
        <div className={style.main_container_name}>
          <p>Название продукта</p>
          <input type="text" name="name product" id="" value={value} onChange={handleChange} />
        </div>
        <div className={style.main_container_category}>
          <div>
            <p>Категория</p>
            <input type="text" name="category" id="" />
          </div>
          <div className={style.main_container_much}>
            <p>Стоимость</p>
            <input type="text" name="so much" id="" />
          </div>
        </div>
        <div className={style.main_container_phone}>
          <p>Телефон</p>
          <input type="tel" name="Phone" id="" />
        </div>
        <div className={style.main_container_description}>
          <p>Описание</p>
          <textarea value={textarea} onChange={event => setTextarea(event.target.value)} />
        </div>
        <div className={style.main_container_photo}>
          <p>Фотография</p>
          <input type="file" name="file" id="" />
        </div>
        <div className={style.main_container_location}>
          <p>Место положение</p>
          <input type="location" />
        </div>
      </div>
    </>
  );
};

export default AdPageComponent;