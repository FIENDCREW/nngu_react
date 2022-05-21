import React, { useEffect, useInsertionEffect } from 'react';
import { json } from 'stream/consumers';
import { userUrl } from '../../api/constats';

const UserPage = () => {
  useEffect(() => {
    fetch(userUrl)
      .then((responce) => responce.json())
      .then((userData) => console.log(userData));
  }, []);
  return <div>UserPage</div>;
};

export default UserPage;
