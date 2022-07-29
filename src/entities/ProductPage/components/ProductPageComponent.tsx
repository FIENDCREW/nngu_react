import React, { FC, useState } from 'react';
import { IUsers } from '../../../interfaces/IUsers';
import Button from '../../../shared/Button';
import Pagination from '../../../shared/Pagination';
import Search from '../../../shared/Search';
import style from '../UsersPage.module.scss';
import ProductCard from './ProductCard';
import ProductFiltr from './ProductFiltr';

interface IProps {
  usersDataAttr: IUsers[];
}

const ProductPageComponent: FC<IProps> = ({ usersDataAttr }) => {
  const [chartItemsAmount, setChartItemsAmount] = useState(0);

  const handleAddItemToChart = () => {
    if (chartItemsAmount < 5) {
      setChartItemsAmount(chartItemsAmount + 1);
    }
  };

  return (
    <div className={style.main}>
      <div className={style.head}>
        <div>
          <h1>Объявления</h1>
          <p>Всего: 145</p>
        </div>
        <Button btnText="Добавить +" handleClick={handleAddItemToChart} />
      </div>
      <div className={style.block_search}>
        <Search text="Найти объявление" />
        <Pagination limit={10} itemsAmount={usersDataAttr.length} />
      </div>
      <div>
        <ProductFiltr />
      </div>
      <div className={style.user_list}>
        {usersDataAttr.length ? (
          usersDataAttr.map((user) => {
            const { id, name, category, date, publicated } = user;
            return (
              <React.Fragment key={`UserId:${id}`}>
                <ProductCard id={id} name={name} category={category} date={''} publicated={false} />
              </React.Fragment>
            );
          })
        ) : (
          <div>Объявления не найдены.</div>
        )}
      </div>
    </div>
  );
};

export default ProductPageComponent;
