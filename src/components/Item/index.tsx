import React, { FC } from 'react';
import style from './Item.module.scss';

interface IItem {
  name: string;
  description: string;
}

const Item: FC<IItem> = (props) => {
  const { name, description } = props;

  // console.log('НАЗВАНИЕ', name);
  // console.log('OPISANIE', description);

  return (
    <div className={style.item_container}>
      <p>{name}</p>
      <p>Орисание</p>
      <p>{description}</p>
    </div>
  );
};

export default Item;
