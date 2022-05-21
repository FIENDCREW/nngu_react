import React, { useEffect, useInsertionEffect, useState } from 'react';
import { json } from 'stream/consumers';
import { userUrl } from '../../api/constats';
import { IUsers } from '../../layouts/PageLayout/interface';
import UsersPageComponent from './components/UsersPageComponent';

const UserPage = () => {
  const [usersData, setUsersdData] = useState<IUsers[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      fetch(userUrl)
        .then((responce) => responce.json())
        .then((data) => setUsersdData(data));
    }, 1500);
  }, []);

  return !usersData ? <div>Загрузка...</div> : <UsersPageComponent usersDataAttr={usersData} />;
};

export default UserPage;
