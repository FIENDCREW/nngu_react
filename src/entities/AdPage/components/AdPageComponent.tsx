import React, { useState } from 'react';
import style from './AdPage.module.scss';
import BackupComponent from './BackupComponent';
import SeveBtn from './SeveBtn';

// interface IProps {
//   id: number;
//   title: string;
//   price: number;
//   category: string;
//   description: string;
//   image: string;
// }

const AdPageComponent = () => {
  const [value, setValue] = useState('text');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event?.target.value);
  };
  const [textarea, setTextarea] = useState('');
  return (
    <>
      <BackupComponent />
      <SeveBtn />
      <div className={style.main_container}>
        <div className={style.main_container_name}>
          <p>Название продукта</p>
          <input
            type="text"
            name="name product"
            id=""
            value={value}
            onChange={handleChange}
            className={style.main_container_name_in}
          />
        </div>
        <div className={style.main_container_flex}>
          <div className={style.main_container_category}>
            <p>Категория</p>
            <input type="text" name="category" id="" className={style.main_container_category_in} />
          </div>
          <div className={style.main_container_much}>
            <p>Стоимость</p>
            <input type="number" name="so much" id="" className={style.main_container_much_in} />
          </div>
        </div>
        <div className={style.main_container_phone}>
          <p>Телефон</p>
          <input type="tel" name="Phone" id=" " className={style.main_container_phone_in} />
        </div>
        <div className={style.main_container_description}>
          <p>Описание</p>
          <textarea
            value={textarea}
            className={style.main_container_description_in}
            onChange={(event) => setTextarea(event.target.value)}
          />
        </div>
        <div className={style.main_container_photo}>
          <p>Фотография</p>
          <input type="file" name="file" id="" className={style.main_container_photo_in} />
        </div>
        <div className={style.main_container_location}>
          <p>Место положение</p>
          <input type="location" className={style.main_container_location_in} />
        </div>
      </div>
    </>
  );
};

export default AdPageComponent;
