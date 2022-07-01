import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import style from '../../CraigsPage/Craigs.module.scss';

interface IProps {
  id: number;
  name: string;
  category: string;
  dataPablic: string;
  pablic: string;
}

const CraigsCard: FC<IProps> = ({ id, name, category, dataPablic, pablic }) => {
  return (
    <div className={style.user_card}>
      <p className={style.user_card_title}>{name}</p>
      <p className={style.user_card_category}>{category}</p>
      <p className={style.user_card_data}>{dataPablic}</p>
      <p className={style.user_card_publication}>{pablic}</p>
      <Link className={style.user_card_edit} to={`${id}`}>
        |||
      </Link>
    </div>
  );
};

export default CraigsCard;
