import React from "react";

interface IUsers {
  usersData: IUsers | null;
}

const UsersPageComponent: FC<IUsers> = () = > {
  return <div>Component</div>;
}; 

export default UsersPageComponent;