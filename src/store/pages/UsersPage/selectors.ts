import { transformUserDataToAntdTableConfig } from '../../../adapters/transformUserDataToAntdTableConfig';
import { IStore } from '../../i';

export const getUsersData = (state: IStore) => {
  const { loading, usersData } = state.users;
  const { userTableColums, mappedUsersData } = transformUserDataToAntdTableConfig(usersData);
  return { loading, userTableColums, mappedUsersData };
};
