import React from 'react';
import Footer from '../../shared/Footer';
import Header from '../../shared/Header';
import Sidebar from '../../shared/Sidebar';
import style from './PageLayout.module.scss';

const PageLayout = () => {
  return (
    <div className={style.page_wrapper}>
      <div className={style.section_wrapper}>
        <Header />
        <Sidebar />
        <div className={style.content_wrapper}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
