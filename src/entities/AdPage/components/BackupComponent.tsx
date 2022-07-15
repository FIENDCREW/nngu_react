import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './SeveBtn.module.scss';

const BackupComponent = () => {
  const navigate = useNavigate();
  return (
    <button type="button" className={style.backup_btn} onClick={() => navigate(-1)}>
      Вернуться назад
    </button>
  );
};

export default BackupComponent;
