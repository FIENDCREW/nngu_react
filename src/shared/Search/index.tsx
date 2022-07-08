import React, { FC } from 'react';
import style from './Search.module.scss';

interface ISerch {
  text: string;
}

const Search: FC<ISerch> = (props) => {
  const { text } = props;
  return <input type="text" className={style.search} />;
};

export default Search;
