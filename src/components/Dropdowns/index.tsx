import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Value } from 'sass';
import { BtnList } from './btnList';
import style from './Dropdowns.module.scss';

const Dropdowns = () => {
  const [ isVisible, setISVisible] = useState(false);
  const { pathname } = useLocation();
  return (
    <div className={style.menu_container}>
      <div onClick={() => setISVisible(prevState => !prevState)}>|||</div>
      {isVisible && 
        <div>
            <ul className={style.sidebar_menu}>
              {BtnList.map((menuItem) => {
                const isActiveClassName = pathname.includes(menuItem.path) ? style.active : '';
                  return (
                    <Link
                      key={menuItem.id}
                      to={menuItem.path}
                      className={`${isActiveClassName} ${style.sidebar_menu_item}`}>
                      <li className={style.sidebar_menu_name}>{menuItem.text}</li>
                    </Link>
                  );
              })}
            </ul>
        </div>
      }
    </div>
  );
};

export default Dropdowns;
