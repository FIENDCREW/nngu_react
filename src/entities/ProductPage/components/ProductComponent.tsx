import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ProductComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <button type="button" onClick={() => navigate(-1)}>
        Вернуться назад
      </button>
      <div>Страница пользователя {id}</div>
    </>
  );
};

export default ProductComponent;

// const AdList = btnList.map((item) {
//   return
//     <tr key={item.id}>
//       <td>{item.look}</td>
//       <td>{item.edit}</td>
//       <td>{item.delete}</td>
//     </tr>
// };
// return <table>
//   <thead>
//     <tr>
//       <td>Посмотреть</td>
//       <td>Редактировать</td>
//       <td>Удалить</td>
//     </tr>
//   </thead>
//   <tbody>
//     {AdList}
//   </tbody>
// </table>;
