import React from 'react';
import style from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={style.page_footer}>
      <div className={style.page_footer_logo}>
        <p>СТИКЕР</p>
        <p>Доска объявлений </p>
      </div>
      <div>© ООО «Доска диджитал», 2022</div>
    </div>
  );
};

export default Footer;
