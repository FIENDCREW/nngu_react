import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './assets/scss/normalize.scss';
import UsersPage from './entities/UsersPage';
import UserComponent from './entities/UsersPage/components/UserComponent';
import PageLayout from './layouts/PageLayout';
import './App.css';

const App = () => {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="users_page" element={<UsersPage />} />
        <Route path="users_page/:id" element={<UserComponent />} />
      </Routes>
    </PageLayout>
  );
};

export default App;
