import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BtnList } from './btnList';
import style from './Dropdowns.module.scss';

const Dropdowns = () => {
  const [isVisible, setISVisible] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === '/') {
      navigate('/ad_page');
    }
  }, [pathname, navigate]);

  return (
    <div className={style.menu_container}>
      <button
        type="button"
        className={style.menu_container_btn}
        onClick={() => setISVisible((prevState) => !prevState)}>
        ⋮
      </button>
      {isVisible && (
        <div>
          <ul className={style.dropdown_menu}>
            {BtnList.map((menuItem) => {
              const isActiveClassName = pathname.includes(menuItem.path) ? style.active : '';
              return (
                <Link
                  key={menuItem.id}
                  to={menuItem.path}
                  className={`${isActiveClassName} ${style.dropdown_menu_item}`}>
                  <img src={menuItem.icon} alt={menuItem.action} />
                  <li className={style.dropdown_menu_name}>{menuItem.text}</li>
                </Link>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdowns;
