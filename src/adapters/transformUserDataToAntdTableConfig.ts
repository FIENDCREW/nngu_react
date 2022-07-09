import { ColumnsType } from 'antd/lib/table';

interface UserDataType {
  key: string;
  name: string;
  email: string;
  phone: string;
}

interface UserDataTransformerReturnValue {
  userTableColums: ColumnsType<UserDataType>;
  mappedUsersData: UserDataType[];
}

export const transformUserDataToAntdTableConfig = () => {
  const userTableColums = [
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
  ];
  const mappedUsersData = usersData.map((user) => {
    const { id, name, email, phone } = user;
    return {
      key: String(id),
      name,
      email,
      phone,
    };
  });
  return { userTableColums, mappedUsersData };
};
