import React, { useState } from 'react';
import Button from '../../shared/Button';
import style from './ItemsList.module.scss';

const ItemsList = () => {
  const [chartItemsAmount, setChartItemsAmount] = useState(0);

  const [name, setName] = useState('');

  const handleNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleAddItemToChart = () => {
    if (chartItemsAmount < 5) {
      setChartItemsAmount(chartItemsAmount + 1);
    }
  };
  return (
    <div className={style.items_list_wrapper}>
      <p>{chartItemsAmount ? `Количество товаров: ${chartItemsAmount}` : 'Корзина пуста'}</p>
      {chartItemsAmount === 5 && <p>Корзина заполнена!</p>}
      {/* <button type="button" onClick={handleAddItemToChart}>
        Добавить в корзину
      </button> */}
      <Button btnText="Добавить в  корзину" handleClick={handleAddItemToChart} />
      <div>
        <p>{name || 'Укажите имя'}</p>
        <input type="text" onChange={handleNameInput} />
      </div>
    </div>
  );
};

export default ItemsList;
