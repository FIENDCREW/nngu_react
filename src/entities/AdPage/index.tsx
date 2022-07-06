import React, { useState } from 'react';
import AdPageComponent from './components/AdPageComponent';

const AdPage = () => {
  const [isShow, setIsShow] = useState(true);
  return (
    <>
      <button type="button" onClick={() => setIsShow((prev) => !prev)}>
        Показать или скрыть компонент
      </button>
      <hr />
      {isShow && <AdPageComponent />}
    </>
  );
};

export default AdPage;
