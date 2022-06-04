import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import style from '../UsersPage.module.scss';

interface IProps {
  id: number;
  name: string;
  email: string;
}

const UserCard: FC<IProps> = ({ id, name, email }) => {
  return (
    <div className={style.user_card}>
      <p>{name}</p>
      <hr />
      <p>{email}</p>
      <hr />
      <Link to={`${id}`}>Подробная информация</Link>
    </div>
  );
};

export default UserCard;
