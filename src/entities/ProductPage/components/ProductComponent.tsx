import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductComponent = () => {
  const navigate = useNavigate();
  return (
    <button type="button" onClick={() => navigate(-1)}>
      Вернуться назад
    </button>
  );
};

export default ProductComponent;
