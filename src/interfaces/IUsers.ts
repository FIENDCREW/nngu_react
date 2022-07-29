
export interface IUsers {
  id: number;
  name: string;
  date: string;
  category: string;
  publicated: boolean;
  phone: string | undefined;
  price: number | undefined;
  description: string | undefined;
  coordinates: {
    latitude: number | undefined;
    longtitude: number | undefined;
  };
  uuid: string | undefined;
}
// export interface IUsers {
//   id: number;
//   title: string;
//   price: number;
//   category: string;
//   description: string;
//   image: string;
// }