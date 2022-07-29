import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IUsers } from '../../interfaces/IUsers';
import ProductPageComponent from './components/ProductPageComponent';

const UsersPage = () => {
  const [usersData, setUsersData] = useState<IUsers[] | null>(null);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  // const getData = async (url: string) => {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   setUsersData(data);
  // };

  useEffect(() => {
    if (pathname === '/') {
      navigate('/users_page');
    }
  }, [pathname, navigate]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     return getData(dataItems);
  //   }, 1000);
  // }, []);

  return !usersData ? <div>Loading...</div> : <ProductPageComponent usersDataAttr={usersData} />;
};

export default UsersPage;
