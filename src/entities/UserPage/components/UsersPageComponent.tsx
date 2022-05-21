import React, { FC } from 'react';
import { IUsers } from '../../../layouts/PageLayout/interface';
import style from '../UsersPage.module.scss';
import UserCard from './UserCard';
interface IProps {
  usersDataAttr: IUsers[] | null;
}

const UsersPageComponent: FC<IProps> = ({ usersDataAttr }) => {
  if (!usersDataAttr) {
    return <div>Загрузка...</div>;
  }
  return (
    <div>
      <p>Список пользователей:</p>
      <div className={style.user_list}>
        {usersDataAttr.length ? (
          usersDataAttr.map((user, i) => {
            const { id, name, email } = user;
            return (
              <React.Fragment key={`UserId:${id}`}>
                <UserCard name={name} email={email} />
              </React.Fragment>
            );
          })
        ) : (
          <div>Пользователи не найдены.</div>
        )}
      </div>
    </div>
  );
};

export default UsersPageComponent;