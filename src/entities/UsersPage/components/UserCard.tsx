import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import style from '../UsersPage.module.scss';

interface IProps {
  id: number;
  name: string;
  category: string;
}

const UserCard: FC<IProps> = ({ id, name, category }) => {
  return (
    <div className={style.user_card}>
      <p>{name}</p>
      <p>{category}</p>
      <Link to={`${id}`}>Подробная информация</Link>
    </div>
  );
};

export default UserCard;
