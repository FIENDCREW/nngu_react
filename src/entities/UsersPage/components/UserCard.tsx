import React, { FC } from 'react';
import style from '../UsersPage.module.scss';

interface IProps {
  name: string;
  email: string;
  username: string;
}

const UserCard: FC<IProps> = ({ name, email, username }) => {
  return (
    <div className={style.user_card}>
      <p>{name}</p>
      <hr />
      <p>{email}</p>
      <hr />
      <p>{username}</p>
    </div>
  );
};

export default UserCard;
