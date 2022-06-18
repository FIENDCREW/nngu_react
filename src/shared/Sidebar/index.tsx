import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './Sidebar.module.scss';

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <div className={style.sidebar_wrapper}>
      <div>Admins</div>
      <hr />
      <div>Объявления</div>
      <hr />
      <div>Выход</div>
    </div>
  );
};

export default Sidebar;
