import React from 'react';
import style from '../UsersPage.module.scss';

const ProductFiltr = () => {
  return (
    <div className={style.product_filtr}>
      <div className={style.product_filtr_name}>
        <p>Название объявления</p>
      </div>
      <div className={style.product_filtr_category}>
        <p>Категория</p>
      </div>
      <div className={style.product_filtr_data}>
        <p>Дата публикации</p>
      </div>
      <div className={style.product_filtr_publicate}>
        <p>Публикация</p>
      </div>
    </div>
  );
};

export default ProductFiltr;
