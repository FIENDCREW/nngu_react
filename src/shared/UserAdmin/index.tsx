import React from 'react';
import style from './UserAdmon.module.scss';

const UserAdmin = () => {
  return (
    <div className={style.user_admin_page}>
      <div>Admins</div>
      <hr />
      <div>Объявления</div>
      <hr />
      <div>Выход</div>
    </div>
  );
};

export default UserAdmin;
