import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './assets/scss/normalize.scss';
import CraigsCard from './entities/CraigsPage/components/CraigdCard';
import CraigsPage from './entities/CraigsPage/components/CraigsPageComponent';
import TestPage from './entities/TestPage';
import TodosPage from './entities/TodosPage';
import UseCallback from './entities/UseCallback';
import UseContext from './entities/UseContext';
import UseMemo from './entities/UseMemo';
import UseRef from './entities/UseRef';
import PageLayout from './layouts/PageLayout';

const App = () => {
  return (
    <PageLayout>
      <Routes>
        {/* <Route path="/" element={<UsersPage />} />
        <Route path="users_page" element={<UsersPage />} />
        <Route path="users_page/:id" element={<UserComponent />} /> */}
        <Route path="test_page" element={<TestPage />} />
        <Route path="todos_page" element={<TodosPage />} />
        <Route path="use_ref" element={<UseRef />} />
        <Route path="use_callback" element={<UseCallback />} />
        <Route path="use_memo" element={<UseMemo />} />
        <Route path="use_context" element={<UseContext />} />
        <Route
          path="craigs_page"
          element={<CraigsCard id={0} name={''} category={''} dataPablic={''} pablic={''} />}
        />
        <Route path="craigs_page/:id" element={<CraigsPage usersDataAttr={[]} />} />
      </Routes>
    </PageLayout>
  );
};

export default App;
