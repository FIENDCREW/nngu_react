import React, { useEffect, useInsertionEffect, useState } from 'react';
import { json } from 'stream/consumers';
import { userUrl } from '../../api/constats';
import { IUsers } from '../../layouts/PageLayout/interface';
import UsersPageComponent from './components/UsersPageComponent';

const UserPage = () => {
  const [usersData, setUserdData] = useState<IUsers | null>(null);
  useEffect(() => {
    fetch(userUrl)
      .then((responce) => responce.json())
      .then((data) => setUserdData(data));
  }, []);
  console.log(usersData);

  return <UsersPageComponent />;
};

export default UserPage;
