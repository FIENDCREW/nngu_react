import React, { FC } from 'react';
import Dropdowns from '../../../components/Dropdowns';
import style from '../UsersPage.module.scss';

interface IProps {
  id: number;
  name: string;
  category: string;
  date: string;
  publicated: boolean;
}

const ProductCard: FC<IProps> = ({ name, category, date, publicated }) => {
  return (
    <div className={style.user_card}>
      <p className={style.user_card_title}>{name}</p>
      <p className={style.user_card_category}>{category}</p>
      <p className={style.user_card_data}>{date}</p>
      <p className={style.user_card_publication}>{publicated ? 'Да' : 'Нет'}</p>
      <Dropdowns />
    </div>
  );
};

export default ProductCard;
