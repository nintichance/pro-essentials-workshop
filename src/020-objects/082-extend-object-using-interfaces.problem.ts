import { Extends, Expect } from "@total-typescript/helpers";
// interface keyword is the most effective way to inherit from something
// interfaces can be used to create hierarchys be
// lets you behave in TS as if in an OOPL

interface WithId {
  id: string;
}

interface WithCreatedAt {
  createdAt: Date;
}

// interface BaseEntity {
//   id: string;
//   createdAt: Date;
// };

interface User extends WithId, WithCreatedAt{
  name: string;
  email: string;
}; 

interface Product extends WithId, WithCreatedAt {
  name: string;
  price: number;
};
// interface BaseEntity {
//   id: string;
//   createdAt: Date;
// };

// interface User extends BaseEntity{
//   name: string;
//   email: string;
// }; 

// interface Product extends BaseEntity {
//   name: string;
//   price: number;
// };

type tests = [
  Expect<
    Extends<
      {
        id: string;
        createdAt: Date;
        name: string;
        email: string;
      },
      User
    >
  >,
  Expect<
    Extends<
      {
        id: string;
        createdAt: Date;
        name: string;
        price: number;
      },
      Product
    >
  >,
];
