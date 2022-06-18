import React from 'react';
import style from './Header.module.scss';

const Header = () => {
  return (
    <div className={style.page_header}>
      <p>СТИКЕР</p>
      <p>Профиль</p>
    </div>
  );
};

export default Header;
