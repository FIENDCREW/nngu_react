import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './assets/scss/normalize.scss';
import ProductPage from './entities/ProductPage';
import PageLayout from './layouts/PageLayout';
import './App.css';
import ProductComponent from './entities/ProductPage/components/ProductComponent';
import AdPageComponent from './entities/AdPage/components/AdPageComponent';
import AdPage from './entities/AdPage';

const App = () => {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="users_page" element={<ProductPage />} />
        <Route path="users_page/:id" element={<ProductComponent />} />
        <Route path="ad_page" element={<AdPage />} />
        <Route path="ad_page/:id" element={<AdPageComponent />} />
      </Routes>
    </PageLayout>
  );
};

export default App;
